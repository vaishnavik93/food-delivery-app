using Microsoft.AspNetCore.Mvc;
using FoodDeliveryAPI.Data;
using FoodDeliveryAPI.Models;

namespace FoodDeliveryAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FoodController : ControllerBase
    {
        private readonly FoodDeliveryContext _context;

        public FoodController(FoodDeliveryContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetFoodMenu()
        {
            return Ok(_context.FoodItems.ToList());
        }

        [HttpPost]
        public IActionResult AddFood(FoodItem item)
        {
            _context.FoodItems.Add(item);
            _context.SaveChanges();

            return Ok(item);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateFood(int id, FoodItem item)
        {
            var food = _context.FoodItems.Find(id);

            if (food == null)
                return NotFound();

            food.Name = item.Name;
            food.Description = item.Description;
            food.Price = item.Price;
            food.IsAvailable = item.IsAvailable;

            _context.SaveChanges();

            return Ok(food);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteFood(int id)
        {
            var food = _context.FoodItems.Find(id);

            if (food == null)
                return NotFound();

            _context.FoodItems.Remove(food);
            _context.SaveChanges();

            return Ok();
        }
    }
}