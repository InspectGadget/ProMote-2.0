using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Resources;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    public class ResourcesController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Resource>>> GetStatuses()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
    }
}