using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Jobs
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public JobDto JobDto { get; set; }
        }
        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
            _mapper = mapper;
            _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var job = await _context.Jobs.FindAsync(request.JobDto.Id);
                
                if(job == null) return null;
                job.Id = request.JobDto.Id;
                job.Title = request.JobDto.Title;
                job.Description = request.JobDto.Description;
                job.MinExperience = request.JobDto.MinExperience;
                job.Salary = request.JobDto.Salary;
                job.StatusId = request.JobDto.StatusId;
                job.CategoryId = request.JobDto.CategoryId;
                job.CustomerId = request.JobDto.CustomerId;
                job.ResourceId = request.JobDto.ResourceId;
                job.UpdatedAt = DateTime.Now;
                var result = await _context.SaveChangesAsync() > 0;
                if(!result) return Result<Unit>.Failure("Failed to update job");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}