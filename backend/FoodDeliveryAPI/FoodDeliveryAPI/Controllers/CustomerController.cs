using Microsoft.AspNetCore.Mvc;
using FoodDeliveryAPI.Data;
using FoodDeliveryAPI.Models;

namespace FoodDeliveryAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly FoodDeliveryContext _context;

        public CustomerController(FoodDeliveryContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public IActionResult Register(Customer customer)
        {
            _context.Customers.Add(customer);
            _context.SaveChanges();

            return Ok(customer);
        }

        [HttpGet]
        public IActionResult GetCustomers()
        {
            return Ok(_context.Customers.ToList());
        }
    }
}