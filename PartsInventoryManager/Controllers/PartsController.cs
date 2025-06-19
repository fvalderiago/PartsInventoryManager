using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PartsInventoryManager.Models;

[ApiController]
[Route("api/[controller]")]
public class PartsController : ControllerBase
{
    private readonly PartsDb _context;

    public PartsController(PartsDb context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Part>>> GetParts([FromQuery] string? name)
    {
        var query = _context.Parts.AsQueryable();

        if (!string.IsNullOrEmpty(name))
        {
            var lowerName = name.ToLower();
            query = query.Where(p => p.Name.ToLower().Contains(lowerName));
        }

        return await query.ToListAsync();
    }



    [HttpPost]
    public async Task<ActionResult<Part>> CreatePart(Part part)
    {
        _context.Parts.Add(part);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetParts), new { id = part.Id }, part);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePart(int id)
    {
        var part = await _context.Parts.FindAsync(id);
        if (part == null) return NotFound();

        _context.Parts.Remove(part);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}
