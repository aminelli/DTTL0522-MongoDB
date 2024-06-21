using Microsoft.AspNetCore.Mvc;
using WebApiMongo01.Models;
using WebApiMongo01.Services;

namespace WebApiMongo01.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlaylistController : ControllerBase
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

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id) { 
            await _mongoDBService.DeleteAsync(id);
            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, [FromBody] Playlist rec)
        {
            await _mongoDBService.UpdateAsync(id, rec);
            return NoContent();
        }


        [HttpPut("addMovie/{id}")]
        public async Task<IActionResult> AddMovieToPlaylistAsync(string id, [FromBody] string movieId) {
            await _mongoDBService.AddMovieToPlaylistAsync(id, movieId);
            return NoContent();
        }

    }


}
