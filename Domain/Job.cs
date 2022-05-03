using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Job
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Category Category { get; set; }
        public string MinExperience { get; set; }
        public int Salary { get; set; }
        public Status Status { get; set; }
        public Customer Customer { get; set; }
        public Employee Employee { get; set; }
        public Resource Resource {get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}