using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Application.Statuses;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [Route("[controller]")]
    public class StatusesController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Status>>> GetStatuses()
        {
            return await Mediator.Send(new List.Query());
        }
    }
}