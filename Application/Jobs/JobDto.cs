using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Application.Jobs
{
    public class JobDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string MinExperience { get; set; }
        public int Salary { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Image { get; set; }
        public string Status { get; set; }
        public Guid StatusId { get; set; }
        public string Category { get; set; }
        public Guid CategoryId { get; set; }        
        public string Customer { get; set; }
        public Guid CustomerId { get; set; }
        public string Resource {get; set; }
        public Guid ResourceId { get; set; }
    }
}