using System;
using System.IO;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media;
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
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        // Public money objects
        private Money pennies;
        private Money nickels;
        private Money dimes;
        private Money quarters;
        private Money otherChange;

        private Money pennyRoll;
        private Money nickelRoll;
        private Money dimeRoll;
        private Money quarterRoll;

        private Money ones;
        private Money fives;
        private Money tens;
        private Money twenties;
        private Money fifties;
        private Money hundreds;

        // array for above Money objects
        Money[] mArray;

        // Boolean to track if changes were made
        bool changesMade = false;

        // Filepath
        string filepath = @"Log.xml";

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            //// Initialize objects
            // Change
            pennies = new Money(0, 0.01, txtPennies);
            nickels = new Money(0, 0.05, txtNickels);
            dimes = new Money(0, 0.10, txtDimes);
            quarters = new Money(0, 0.25, txtQuarters);
            otherChange = new Money(0, 1, txtOther);

            pennyRoll = new Money(0, 0.50, txtPennyRolls);
            nickelRoll = new Money(0, 2.00, txtNickelRolls);
            dimeRoll = new Money(0, 5.00, txtDimeRolls);
            quarterRoll = new Money(0, 10.00, txtQuarterRolls);

            // Bills
            ones = new Money(0, 1, txtOnes);
            fives = new Money(0, 5, txtFives); ;
            tens = new Money(0, 10, txtTens); ;
            twenties = new Money(0, 20, txtTwenties);
            fifties = new Money(0, 50, txtFifties); ;
            hundreds = new Money(0, 100, txtHundreds);

            // Create array that contains every object above
            mArray = new[]{ pennies, nickels, dimes, quarters, otherChange, pennyRoll, nickelRoll, dimeRoll, quarterRoll, ones, fives, tens, twenties, fifties, hundreds };

            // Create xml file if it hasnt already been made or has been deleted
            if (!File.Exists(filepath))
            {
                /* Create XML file */
                XmlTextWriter xtw;
                // Give file a filepath and encoding
                xtw = new XmlTextWriter(filepath, System.Text.Encoding.UTF32);
                xtw.WriteStartDocument();
                xtw.WriteStartElement("Records");
                xtw.WriteEndElement();
                xtw.Close();
            }
        }

        private void AnyTextChanged(object sender, TextChangedEventArgs e)
        {
            // set changes made to true
            changesMade = true;

            // money total
            double total = 0;
            double change = 0;
            double bills = 0;

            // calculate total by looping through array of "Money" objects
            for (int i = 0; i < mArray.Length; i++)
            {
                if (!mArray[i].TextBox.Text.Contains(".") || i == 4)
                {
                    // try parse
                    if (double.TryParse(mArray[i].TextBox.Text, out double tempCount))
                    {
                        // Change foreground back to black
                        mArray[i].TextBox.Foreground = Brushes.Black;

                        // Assign real count to temp count from parsing
                        mArray[i].Count = tempCount;

                        // Calculate amount (number of that item multiplied by how much that item is worth)
                        double amount = mArray[i].Count * mArray[i].Worth;

                        // If array index is less then 9
                        // (Values of index less than 9 are coins, over 9 is bills)
                        if (i < 9)
                        {
                            change += amount;
                        }
                        else
                        {
                            bills += amount;
                        }
                    }
                    else
                    {
                        // If parsing failed, change foregroup to red
                        mArray[i].TextBox.Foreground = Brushes.Red;
                    }
                }
                else
	            {
                    // If user entered a decimal point, get rid of it and display error message
                    mArray[i].TextBox.Text = mArray[i].TextBox.Text.Replace(".", "");
                    MessageBox.Show("Decimal point not needed.");
                }
            }

            // Add change and bills to get total cash
            total += change + bills;

            // Display change, bills, and cash totals
            lblChange.Content = change.ToString("c");
            lblBills.Content = bills.ToString("c");
            lblTotal.Content = total.ToString("c");

        }

        private void cbxTheme_Checked(object sender, RoutedEventArgs e)
        {
            //// Change Background to Black
            this.Background = Brushes.Black;

            //// Change Forgrounds to White
            this.Foreground = Brushes.White;

            // Change
            lblChangeText.Foreground = Brushes.White;
            lblTotalChange.Foreground = Brushes.White;
            lblChange.Foreground = Brushes.White;

            lblChangeText.Foreground = Brushes.White;
            lblPennies.Foreground = Brushes.White;
            lblNickels.Foreground = Brushes.White;
            lblDimes.Foreground = Brushes.White;
            lblQuarters.Foreground = Brushes.White;
            lblOther.Foreground = Brushes.White;

            lblPennyRolls.Foreground = Brushes.White;
            lblNickelRolls.Foreground = Brushes.White;
            lblDimeRolls.Foreground = Brushes.White;
            lblQuarterRolls.Foreground = Brushes.White;

            // Bills
            lblBillsText.Foreground = Brushes.White;
            lblTotalBills.Foreground = Brushes.White;
            lblBills.Foreground = Brushes.White;

            lbl1s.Foreground = Brushes.White;
            lbl5s.Foreground = Brushes.White;
            lbl10s.Foreground = Brushes.White;
            lbl20s.Foreground = Brushes.White;
            lbl50s.Foreground = Brushes.White;
            lbl100s.Foreground = Brushes.White;

            // Total Cash
            lblTotalCash.Foreground = Brushes.White;
            lblTotal.Foreground = Brushes.White;

            // Checkbox
            cbxTheme.Foreground = Brushes.White;

            /// Buttons
            btnFinish.Background = Brushes.White;
            btnFinishAndExit.Background = Brushes.White;
            btnReset.Background = Brushes.White;
            btnRecords.Background = Brushes.White;
        }

        private void cbxTheme_Unchecked(object sender, RoutedEventArgs e)
        {
            //// Change Background to White
            this.Background = Brushes.White;

            //// Change Forgrounds to Black
            this.Foreground = Brushes.Black;

            // Change
            lblChangeText.Foreground = Brushes.Black;
            lblTotalChange.Foreground = Brushes.Black;
            lblChange.Foreground = Brushes.Black;

            lblChangeText.Foreground = Brushes.Black;
            lblPennies.Foreground = Brushes.Black;
            lblNickels.Foreground = Brushes.Black;
            lblDimes.Foreground = Brushes.Black;
            lblQuarters.Foreground = Brushes.Black;
            lblOther.Foreground = Brushes.Black;

            lblPennyRolls.Foreground = Brushes.Black;
            lblNickelRolls.Foreground = Brushes.Black;
            lblDimeRolls.Foreground = Brushes.Black;
            lblQuarterRolls.Foreground = Brushes.Black;

            // Bills
            lblBillsText.Foreground = Brushes.Black;
            lblTotalBills.Foreground = Brushes.Black;
            lblBills.Foreground = Brushes.Black;

            lbl1s.Foreground = Brushes.Black;
            lbl5s.Foreground = Brushes.Black;
            lbl10s.Foreground = Brushes.Black;
            lbl20s.Foreground = Brushes.Black;
            lbl50s.Foreground = Brushes.Black;
            lbl100s.Foreground = Brushes.Black;

            // Total Cash
            lblTotalCash.Foreground = Brushes.Black;
            lblTotal.Foreground = Brushes.Black;

            // Checkbox
            cbxTheme.Foreground = Brushes.Black;

            // Buttons
            btnFinish.Background = Brushes.LightGray;
            btnFinishAndExit.Background = Brushes.LightGray;
            btnReset.Background = Brushes.LightGray;
            btnRecords.Background = Brushes.LightGray;

        }

        private void btnReset_Click(object sender, RoutedEventArgs e)
        {
            // If changes have been made
            if (changesMade)
            {
                // Ask user if they would like to close without saving
                MessageBoxResult result = MessageBox.Show("Are you sure you would like to clear all fields without saving?",
                                                          "Are You Sure?", MessageBoxButton.YesNo, MessageBoxImage.Warning, MessageBoxResult.No);

                // If user says yes, clear all fields
                // Else, don't do anything
                if (result == MessageBoxResult.Yes)
                {
                    // Clear all textboxes
                    for (int i = 0; i < mArray.Length; i++)
                    {
                        mArray[i].TextBox.Text = "";
                    }

                    changesMade = false;
                }
            }
        }

        private bool RecordRecord(string saveCause)
        {
            try
            {
                // Create XML obj
                XmlDocument xd = new XmlDocument();

                // Create FileStream object
                FileStream log = new FileStream(filepath, FileMode.Open);

                // Load file
                xd.Load(log);

                /* Elements */

                // Main Till
                XmlElement till = xd.CreateElement("Till");

                // Date
                XmlElement elemDate = xd.CreateElement("Date");

                // Change
                XmlElement elemPennies = xd.CreateElement("Pennies");
                XmlElement elemNickels = xd.CreateElement("Nickels");
                XmlElement elemDimes = xd.CreateElement("Dimes");
                XmlElement elemQuarters = xd.CreateElement("Quarters");
                XmlElement elemOtherChange = xd.CreateElement("OtherChange");
                XmlElement elemPennyRolls = xd.CreateElement("PennyRolls");
                XmlElement elemNickelRolls = xd.CreateElement("NickelRolls");
                XmlElement elemDimeRolls = xd.CreateElement("DimeRolls");
                XmlElement elemQuarterRolls = xd.CreateElement("QuarterRolls");

                // Bills
                XmlElement elemOnes = xd.CreateElement("Ones");
                XmlElement elemFives = xd.CreateElement("Fives");
                XmlElement elemTens = xd.CreateElement("Tens");
                XmlElement elemTwenties = xd.CreateElement("Twenties");
                XmlElement elemFifties = xd.CreateElement("Fifties");
                XmlElement elemHundreds = xd.CreateElement("Hundreds");

                // Totals
                XmlElement elemTotalChange = xd.CreateElement("TotalChange");
                XmlElement elemTotalBills = xd.CreateElement("TotalBills");
                XmlElement elemTotalCash = xd.CreateElement("TotalCash");

                // Save Cause
                XmlElement elemSaveCause = xd.CreateElement("SaveCause");

                /* Text Nodes */

                // Date
                XmlText tnDate = xd.CreateTextNode(DateTime.Now.ToString());

                // Change
                XmlText tnPennies = xd.CreateTextNode(txtPennies.Text);
                XmlText tnNickels = xd.CreateTextNode(txtNickels.Text);
                XmlText tnDimes = xd.CreateTextNode(txtDimes.Text);
                XmlText tnQuarters = xd.CreateTextNode(txtQuarters.Text);
                XmlText tnOtherChange = xd.CreateTextNode(txtOther.Text);
                XmlText tnPennyRolls = xd.CreateTextNode(txtPennyRolls.Text);
                XmlText tnNickelRolls = xd.CreateTextNode(txtNickelRolls.Text);
                XmlText tnDimeRolls = xd.CreateTextNode(txtDimeRolls.Text);
                XmlText tnQuarterRolls = xd.CreateTextNode(txtQuarterRolls.Text);

                // Change values
                XmlText tnOnes = xd.CreateTextNode(txtOnes.Text);
                XmlText tnFives = xd.CreateTextNode(txtFives.Text);
                XmlText tnTens = xd.CreateTextNode(txtTens.Text);
                XmlText tnTwenties = xd.CreateTextNode(txtTwenties.Text);
                XmlText tnFifties = xd.CreateTextNode(txtFifties.Text);
                XmlText tnHundreds = xd.CreateTextNode(txtHundreds.Text);

                // Change values
                XmlText tnTotalChange = xd.CreateTextNode(lblChange.Content.ToString());
                XmlText tnTotalBills = xd.CreateTextNode(lblBills.Content.ToString());
                XmlText tnTotalCash = xd.CreateTextNode(lblTotal.Content.ToString());

                // Save Cause
                XmlText tnSaveCause = xd.CreateTextNode(saveCause);

                //// Populate Elements with Text Nodes

                // Date
                elemDate.AppendChild(tnDate);

                // Change
                elemPennies.AppendChild(tnPennies);
                elemNickels.AppendChild(tnNickels);
                elemDimes.AppendChild(tnDimes);
                elemQuarters.AppendChild(tnQuarters);
                elemOtherChange.AppendChild(tnOtherChange);
                elemPennyRolls.AppendChild(tnPennyRolls);
                elemNickelRolls.AppendChild(tnNickelRolls);
                elemDimeRolls.AppendChild(tnDimeRolls);
                elemQuarterRolls.AppendChild(tnQuarterRolls);

                // Bills
                elemOnes.AppendChild(tnOnes);
                elemFives.AppendChild(tnFives);
                elemTens.AppendChild(tnTens);
                elemTwenties.AppendChild(tnTwenties);
                elemFifties.AppendChild(tnFifties);
                elemHundreds.AppendChild(tnHundreds);

                // Totals
                elemTotalChange.AppendChild(tnTotalChange);
                elemTotalBills.AppendChild(tnTotalBills);
                elemTotalCash.AppendChild(tnTotalCash);

                // Save Cause
                elemSaveCause.AppendChild(tnSaveCause);

                ////  Add change elements to main till element

                // Date
                till.AppendChild(elemDate);

                // Change
                till.AppendChild(elemPennies);
                till.AppendChild(elemNickels);
                till.AppendChild(elemDimes);
                till.AppendChild(elemQuarters);
                till.AppendChild(elemOtherChange);
                till.AppendChild(elemPennyRolls);
                till.AppendChild(elemNickelRolls);
                till.AppendChild(elemDimeRolls);
                till.AppendChild(elemQuarterRolls);

                // Bills
                till.AppendChild(elemOnes);
                till.AppendChild(elemFives);
                till.AppendChild(elemTens);
                till.AppendChild(elemTwenties);
                till.AppendChild(elemFifties);
                till.AppendChild(elemHundreds);

                // Totals
                till.AppendChild(elemTotalChange);
                till.AppendChild(elemTotalBills);
                till.AppendChild(elemTotalCash);

                // Save Cause
                till.AppendChild(elemSaveCause);

                // Add till element to XML file
                xd.DocumentElement.AppendChild(till);

                // Close file
                log.Close();

                // Save file
                xd.Save(filepath);

                // set changes made
                changesMade = false;

                // Return true to signify succes
                return true;
            }
            catch (Exception e)
            {
                // Display error message
                MessageBox.Show(e.Message);

                // Return false
                return false;
            }
        }

        private void Window_Closing(object sender, System.ComponentModel.CancelEventArgs e)
        {
            // If changes were made to the form, ask if user would like to save and exit?
            if (changesMade)
            {
                // Ask user if they would like to close without saving
                MessageBoxResult result = MessageBox.Show("Would you like to record your till values and exit?",
                                                          "Finalize and Exit", MessageBoxButton.YesNoCancel, MessageBoxImage.Question, MessageBoxResult.No);

                // If user says yes, close the form
                if (result == MessageBoxResult.Yes)
                {
                    // Try to save and exit
                    e.Cancel = !SaveAndExit();
                }
                else if (result == MessageBoxResult.Cancel)
                {
                    e.Cancel = true;
                }
            }
        }

        private void btnRecords_Click(object sender, RoutedEventArgs e)
        {
            // Create new records window
            RecordsWindow rw = new RecordsWindow();

            // Show records window
            rw.ShowDialog();
        }

        private void btnFinishAndExit_Click(object sender, RoutedEventArgs e)
        {
            // Try and close form
            this.Close();
        }

        private bool SaveAndExit(string cause = "Exit")
        {
            // If changes were made to the form
            if (changesMade)
            {
                // Try to record record
                if (RecordRecord(cause))
                {
                    // If record is saved successfully, return true to close form
                    return true;
                }
                else
                {
                    // Ask user if they would like to close without saving
                    MessageBoxResult result = MessageBox.Show("There was an error saving the record to the database.\n\n" +
                                                              "Would you like to close JJTillCounter without saving the record?",
                                                              "Error", MessageBoxButton.YesNo, MessageBoxImage.Error, MessageBoxResult.No);

                    // If user says yes, close the form
                    if (result == MessageBoxResult.Yes)
                    {
                        changesMade = false;

                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            }

            return true;
        }

        private void btnFinish_Click(object sender, RoutedEventArgs e)
        {
            // If changes were made to the form
            if (changesMade)
            {
                // Ask user if they would like to close without saving
                MessageBoxResult result = MessageBox.Show("Would you like to record your till values?",
                                                          "Finalize", MessageBoxButton.YesNo, MessageBoxImage.Question, MessageBoxResult.No);

                // If user says yes, save to database
                if (result == MessageBoxResult.Yes)
                {
                    // Try to record till
                    if (!RecordRecord("Finish"))
                    {
                        // If recording fails, show error message
                        MessageBox.Show("There was an error saving the record to the database.",
                                        "Error");
                    }
                    else
                    {
                        // Clear all textboxes
                        for (int i = 0; i < mArray.Length; i++)
                        {
                            mArray[i].TextBox.Text = "";
                        }

                        // set changes made
                        changesMade = false;
                    }
                }
            }
            else
            {
                // If recording fails, show error message
                MessageBox.Show("No changes have been made to the form to save.",
                                "Nothing To Save");
            }
        }
    }
}
