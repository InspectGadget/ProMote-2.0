using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Jobs
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Job Job { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
            _mapper = mapper;
            _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var job = await _context.Jobs.FindAsync(request.Job.Id);
                // _mapper.Map(request.Job, job);
                job.Title = request.Job.Title ?? job.Title;
                job.StatusId = request.Job.StatusId;
                var status = await _context.Statuses.FindAsync(request.Job.StatusId);
                job.Status.Id = request.Job.StatusId;
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}