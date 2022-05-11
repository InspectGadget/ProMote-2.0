using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Categories;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    public class CategoriesController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Category>>> GetStatuses()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
    }
}