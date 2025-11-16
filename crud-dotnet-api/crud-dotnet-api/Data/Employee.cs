
namespace crud_dotnet_api.Data
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public int Age { get; set; }
        public int Salary {  get; set; }
        public string Password { get; set; } = string.Empty;
    }
}
