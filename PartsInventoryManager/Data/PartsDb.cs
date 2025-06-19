using Microsoft.EntityFrameworkCore;
using PartsInventoryManager.Models;

public class PartsDb : DbContext
{
    public PartsDb(DbContextOptions<PartsDb> options) : base(options) { }

    public DbSet<Part> Parts { get; set; }
}
