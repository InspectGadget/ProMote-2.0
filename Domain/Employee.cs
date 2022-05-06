using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class Employee
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime VerifiedDate { get; set; }
        public bool IsSubscribed { get; set; }

        public Company Company { get; set; }
        public Guid CompanyId { get; set; }

        public ICollection<Job> Jobs {get; set;}

        public ICollection<Filter> Filters {get; set;}

        [ForeignKey("Account")]
        public string AccountId { get; set; }
        public virtual Account Account { get; set; }
    }
}