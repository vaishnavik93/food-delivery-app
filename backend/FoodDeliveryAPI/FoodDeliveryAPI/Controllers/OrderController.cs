using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using FoodDeliveryAPI.Data;
using FoodDeliveryAPI.Models;

namespace FoodDeliveryAPI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly FoodDeliveryContext _context;

        public OrderController(FoodDeliveryContext context)
        {
            _context = context;
        }

        // Place Order
        [HttpPost]
        public IActionResult PlaceOrder(Order order)
        {
            order.OrderDate = DateTime.Now;
            order.OrderStatus = "Pending";

            _context.Orders.Add(order);
            _context.SaveChanges();

            return Ok(order);
        }

        // Get All Orders
        [HttpGet]
        public IActionResult GetOrders()
        {
            var orders = _context.Orders.ToList();
            return Ok(orders);
        }

        // Get Orders by Customer
        [HttpGet("customer/{customerId}")]
        public IActionResult GetCustomerOrders(int customerId)
        {
            var orders = _context.Orders
                .Where(o => o.CustomerId == customerId)
                .ToList();

            return Ok(orders);
        }

        // Update Order Status (Admin)
        [HttpPut("{id}/status")]
        public IActionResult UpdateStatus(int id, string status)
        {
            var order = _context.Orders.Find(id);

            if (order == null)
                return NotFound();

            order.OrderStatus = status;

            _context.TrackOrderStatus.Add(new TrackOrderStatus
            {
                OrderId = id,
                Status = status,
                StatusTime = DateTime.Now
            });

            _context.SaveChanges();

            return Ok(order);
        }
    }
}