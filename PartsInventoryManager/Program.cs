using Microsoft.EntityFrameworkCore;
using PartsInventoryManager.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<PartsDb>(opt => opt.UseInMemoryDatabase("PartsDb"));
builder.Services.AddCors(); // Optional if not using proxy

var app = builder.Build();

app.UseHttpsRedirection();
app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
app.UseAuthorization();
app.MapControllers();

app.Run();
