using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class Customer
    {
        public Guid Id { get; set; }
        public DateTime CreatedAt { get; set; }

        public ICollection<Resource> Resources {get; set;}

        public ICollection<Job> Jobs {get; set;}

        [ForeignKey("Account")]
        public string AccountId { get; set; }
        public virtual Account Account { get; set; }
    }
}