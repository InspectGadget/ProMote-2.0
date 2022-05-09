using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Application.Resources;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    public class ResourcesController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Resource>>> GetStatuses()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
    }
}