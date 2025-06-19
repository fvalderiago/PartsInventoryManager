namespace PartsInventoryManager.Models
{
    public class Part
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Category { get; set; }
        public string? Supplier { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
    }
}
