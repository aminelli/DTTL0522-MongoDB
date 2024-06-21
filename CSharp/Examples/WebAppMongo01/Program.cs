using Microsoft.EntityFrameworkCore;
using WebAppMongo01.Models;
using WebAppMongo01.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();


var mongoDBSettings = builder
    .Configuration
    .GetSection("MongoDBSettings")
    .Get<MongoDBSettings>();

builder.Services
    .Configure<MongoDBSettings>(
    builder.Configuration.GetSection("MongoDBSettings")
);

builder.Services.AddDbContext<CarBookingDbContext>(
    options =>
    options.UseMongoDB(mongoDBSettings.URI ?? "", mongoDBSettings.DatabaseName ?? "")
);

builder.Services.AddScoped<ICarService, CarService>();
builder.Services.AddScoped<IBookingService, BookingService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Car}/{action=Index}/{id?}");

app.Run();
