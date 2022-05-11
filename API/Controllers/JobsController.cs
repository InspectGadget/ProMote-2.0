using System;
using System.Threading.Tasks;
using Application.Jobs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    public class JobsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult> GetJobs()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
        [HttpGet("{id}")]
        public async Task<ActionResult> GetJob(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }
        [HttpPost]
        public async Task<IActionResult> CreateJob(JobDto job)
        {
            return HandleResult(await Mediator.Send(new Create.Command {JobDto = job}));
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> EditJob(Guid id, JobDto job)
        {
            job.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command{JobDto = job}));
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJob(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command{Id =id}));
        }
    }
}