using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Statuses;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    public class StatusesController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Status>>> GetStatuses()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
    }
}