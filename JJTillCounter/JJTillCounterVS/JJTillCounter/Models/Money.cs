using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Controls;

public class Money
{
    /// <summary>
    /// Number of that currency
    /// </summary>
    public double Count { get; set; }
    public TextBox TextBox { get; set; }
    public double Worth { get; set; }

    public Money(int count, double worth, TextBox textBox)
    {
        this.Count = count;
        this.Worth = worth;
        this.TextBox = textBox;
    }
}
