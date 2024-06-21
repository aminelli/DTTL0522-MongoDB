// See https://aka.ms/new-console-template for more information


using ConsoleMongo01.Test;

Console.WriteLine("START => test");

// Test01.FirstConn();
// Test01.FindDocSync();
// Test01.TestAggregation01().Wait();
// Test01.TestAggregation02().Wait();
// Test01.TestAggregation03().Wait();

Test01.TestTrans01();

Console.WriteLine("END => test");
