using Microsoft.AspNetCore.Mvc;
using WebApiMongo01.Models;
using WebApiMongo01.Services;

namespace WebApiMongo01.Controllers
{
    [Controller]
    [Route("api/[controller]")]
    public class PlaylistController : Controller
    {

        private readonly MongoDBServices _mongoDBService;

        public PlaylistController(MongoDBServices mongoDBService) {
            _mongoDBService = mongoDBService;
        }

        [HttpGet]
        public async Task<List<Playlist>> Get() {
            return await _mongoDBService.GetAsync();
        }

        [HttpPost]
        public async Task<IActionResult> Post(
                [FromBody] Playlist rec
            )
        {
            await _mongoDBService.CreateAsync(rec);
            return CreatedAtAction(
                nameof(Get),
                new { id = rec.Id },
                rec
            );
        }





    }


}
