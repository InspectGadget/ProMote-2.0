using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Jobs
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public JobDto JobDto { get; set; }
        }
        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
        private readonly DataContext _context;
            public Handler(DataContext context)
            {
            _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var newJob = new Job{
                    Id = request.JobDto.Id,
                    Title = request.JobDto.Title,
                    Description = request.JobDto.Description,
                    MinExperience = request.JobDto.MinExperience,
                    Salary = request.JobDto.Salary,
                    StatusId = request.JobDto.StatusId,
                    CategoryId = request.JobDto.CategoryId,
                    CustomerId = Guid.Parse("E5BA92DE-04F6-4B2B-BD50-08DA2F5E92C2"),
                    ResourceId = request.JobDto.ResourceId,
                    UpdatedAt = DateTime.Now,
                    CreatedAt = DateTime.Now,
                };
                _context.Jobs.Add(newJob);
                var result = await _context.SaveChangesAsync() > 0;
                if (!result) return Result<Unit>.Failure("Failed to create job");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}