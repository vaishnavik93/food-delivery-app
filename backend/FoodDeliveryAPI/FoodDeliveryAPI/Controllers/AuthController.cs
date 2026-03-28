using Microsoft.AspNetCore.Mvc;
using FoodDeliveryAPI.Data;
using FoodDeliveryAPI.DTOs;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace FoodDeliveryAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly FoodDeliveryContext _context;
        private readonly IConfiguration _config;

        public AuthController(FoodDeliveryContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        /////////////////////////////////////////////////////////
        // CUSTOMER LOGIN
        /////////////////////////////////////////////////////////

        [HttpPost("login")]
        public IActionResult Login(LoginDTO login)
        {
            var user = _context.Customers
                .FirstOrDefault(x => x.Email == login.Email && x.Password == login.Password);

            if (user == null)
                return Unauthorized("Invalid credentials");

            var token = GenerateToken(user.Email);

            return Ok(new { token });
        }

        /////////////////////////////////////////////////////////
        // ADMIN LOGIN
        /////////////////////////////////////////////////////////

        [HttpPost("admin-login")]
        public IActionResult AdminLogin(AdminLoginDTO login)
        {
            var admin = _context.Admins
                .FirstOrDefault(x => x.Username == login.Username && x.Password == login.Password);

            if (admin == null)
                return Unauthorized("Invalid admin credentials");

            var token = GenerateToken(admin.Username);

            return Ok(new { token });
        }

        /////////////////////////////////////////////////////////
        // JWT TOKEN GENERATION
        /////////////////////////////////////////////////////////

        private string GenerateToken(string username)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.Name, username)
            };

            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(_config["Jwt:Key"]));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddHours(2),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}