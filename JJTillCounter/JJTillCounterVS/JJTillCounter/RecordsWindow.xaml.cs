using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;
using System.IO;
using System.Xml;

/*
*************************************
*                                   *
*         Austin Van Bockern        *
*         JJTillCounter             *
*         Version 1.0.0.3           *
*         11/11/2017                *
*                                   *
*************************************
*/

namespace JJTillCounter
{
    /// <summary>
    /// Interaction logic for RecordsWindow.xaml
    /// </summary>
    public partial class RecordsWindow : Window
    {
        public RecordsWindow()
        {
            InitializeComponent();
        }

        // class-level objects to hold information about XML database
        XmlNodeList list;
        XmlDocument xd;

        // Filepath
        string filepath = @"Log.xml";

        private void PopulateListBox(object sender, RoutedEventArgs e)
        {
            // If method is being run on form load, populate the XML class-level objects
            if (e.RoutedEvent.Name == "Loaded")
            {
                LoadDatabase();
            }

            //clear list box
            if (lbxRecords != null)
            {
                lbxRecords.Items.Clear();
            }
            // try to populate the listbox
            try
            {
                // int var for limit of how many items to show
                int maxCount = 20;

                // get the selected value based on the selected index
                // *this logic was put into place becuase of issues with ComboBox.Text equaling = "" *
                if (cbxRecordCount.SelectedIndex == 2)
                {
                    maxCount = 100;
                }
                else
                {
                    maxCount = cbxRecordCount.SelectedIndex == 1 ? 50 : 20;
                }

                // assign the limit of itmes in the listbox to either 
                // the selected item in the combo box or the number of records in the database.
                // chose the larger value
                maxCount = list.Count < maxCount ? list.Count : maxCount;

                // Loop through list of 
                for (int i = 0; i < maxCount; i++)
                {
                    // Display a summary of the information about each record
                    // date
                    string date = xd.GetElementsByTagName("Date")[i].InnerText;
                    // total cash
                    string totalCash = xd.GetElementsByTagName("TotalCash")[i].InnerText;
                    // save cause
                    string saveCause = xd.GetElementsByTagName("SaveCause")[i].InnerText;

                    // display
                    lbxRecords.Items.Add("Date Saved: " + date + "\t\t" +
                                         "Total Cash: " + totalCash + "   \t\t" +
                                         "Saved On: " + saveCause);
                }
            }
            catch
            {
                MessageBox.Show("There was an error loading records into visual format.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private void LoadDatabase()
        {
            try
            {
                // Create XML obj
                xd = new XmlDocument();


                // Create FileStream object
                FileStream log = new FileStream(filepath, FileMode.Open);

                // Load file
                xd.Load(log);

                // XmlNodeList for list of items (Tills)
                list = xd.GetElementsByTagName("Till");

                // Close filesteam
                log.Close();
            }
            catch
            {
                // Error message that displays if there was an error populating the listbox
                MessageBox.Show("Error loading records.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private void btnView_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                // get index of selected item in list box
                int index = lbxRecords.SelectedIndex;

                //// Get record at selected index of list box

                // Get date
                XmlElement date = (XmlElement)xd.GetElementsByTagName("Date")[index];

                // Get change
                XmlElement pennies = (XmlElement)xd.GetElementsByTagName("Pennies")[index];
                XmlElement nickels = (XmlElement)xd.GetElementsByTagName("Nickels")[index];
                XmlElement dimes = (XmlElement)xd.GetElementsByTagName("Dimes")[index];
                XmlElement quarters = (XmlElement)xd.GetElementsByTagName("Quarters")[index];
                XmlElement otherChange = (XmlElement)xd.GetElementsByTagName("OtherChange")[index];

                XmlElement pennyRolls = (XmlElement)xd.GetElementsByTagName("PennyRolls")[index];
                XmlElement nickelRolls = (XmlElement)xd.GetElementsByTagName("NickelRolls")[index];
                XmlElement dimeRolls = (XmlElement)xd.GetElementsByTagName("DimeRolls")[index];
                XmlElement quarterRolls = (XmlElement)xd.GetElementsByTagName("QuarterRolls")[index];

                // Get bills
                XmlElement ones = (XmlElement)xd.GetElementsByTagName("Ones")[index];
                XmlElement fives = (XmlElement)xd.GetElementsByTagName("Fives")[index];
                XmlElement tens = (XmlElement)xd.GetElementsByTagName("Tens")[index];
                XmlElement twenties = (XmlElement)xd.GetElementsByTagName("Twenties")[index];
                XmlElement fifties = (XmlElement)xd.GetElementsByTagName("Fifties")[index];
                XmlElement hundreds = (XmlElement)xd.GetElementsByTagName("Hundreds")[index];

                // Get totals
                XmlElement totalChange = (XmlElement)xd.GetElementsByTagName("TotalChange")[index];
                XmlElement totalBills = (XmlElement)xd.GetElementsByTagName("TotalBills")[index];
                XmlElement totalCash = (XmlElement)xd.GetElementsByTagName("TotalCash")[index];

                // Get save cause
                XmlElement saveCause = (XmlElement)xd.GetElementsByTagName("SaveCause")[index];

                MessageBox.Show("Date Saved:\t" + date.InnerText + "\n\n" +
                                "Pennies:\t\t" + pennies.InnerText + "\n" +
                                "Nickels:\t\t" + nickels.InnerText + "\n" +
                                "Dimes:\t\t" + dimes.InnerText + "\n" +
                                "Quarters:\t\t" + quarters.InnerText + "\n" +
                                "Other Change:\t" + otherChange.InnerText + "\n\n" +
                                "Penny Rolls:\t" + pennyRolls.InnerText + "\n" +
                                "Nickel Rolls:\t" + nickelRolls.InnerText + "\n" +
                                "Dime Rolls:\t" + dimeRolls.InnerText + "\n" +
                                "Quarter Rolls:\t" + quarterRolls.InnerText + "\n\n" +
                                "Ones:\t\t" + ones.InnerText + "\n" +
                                "Fives:\t\t" + fives.InnerText + "\n" +
                                "Tens:\t\t" + tens.InnerText + "\n" +
                                "Twenties:\t\t" + twenties.InnerText + "\n" +
                                "Fifties:\t\t" + fifties.InnerText + "\n" +
                                "Hundreds:\t" + hundreds.InnerText + "\n\n" +
                                "Total Change:\t" + totalChange.InnerText + "\n" +
                                "Total Bills:\t" + totalBills.InnerText + "\n" +
                                "Total Cash:\t" + totalCash.InnerText + "\n\n" +
                                "Saved On:\t" + saveCause.InnerText, 
                                "Record Details", MessageBoxButton.OK, MessageBoxImage.Information);
            }
            catch
            {
                MessageBox.Show("Error displaying selected record.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private void btnExit_Click(object sender, RoutedEventArgs e)
        {
            // Close form
            this.Close();
        }
    }
}
