using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Employee
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public Account Account { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime VerifiedDate { get; set; }
        public bool IsSubscribed { get; set; }
        public Company Company { get; set; }
    }
}