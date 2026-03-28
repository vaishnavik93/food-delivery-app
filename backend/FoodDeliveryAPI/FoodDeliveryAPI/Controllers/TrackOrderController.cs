using Microsoft.AspNetCore.Mvc;
using FoodDeliveryAPI.Data;

namespace FoodDeliveryAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TrackOrderController : ControllerBase
    {
        private readonly FoodDeliveryContext _context;

        public TrackOrderController(FoodDeliveryContext context)
        {
            _context = context;
        }

        [HttpGet("{orderId}")]
        public IActionResult TrackOrder(int orderId)
        {
            var status = _context.TrackOrderStatus
                .Where(x => x.OrderId == orderId)
                .OrderBy(x => x.StatusTime)
                .ToList();

            return Ok(status);
        }
    }
}