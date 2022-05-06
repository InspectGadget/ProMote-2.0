using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Status
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public ICollection<Job> Jobs {get; set;}
    }
}