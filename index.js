require("./config/global");
port =  3000; //Use the port defined in .env file or use port 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //To parse data using querystring library
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.set("view engine", "ejs"); //Set view engine to ejs for rendering

console.log(process.env.DB_PASSWORD);
app.use("/app/User",require("./routes/UserRoutes"));
app.use("/app/Admin",require("./routes/AdminRouter"));
// app.use("/app/admin", require("./routes/AdminRoutes"));
// app.use("/app/account", require("./routes/AccountRoutes"));
// app.use("/app/account/transaction", require("./routes/TransactionRoutes"));
// app.use("/app/accounts", require("./routes/AdminTransactionsRoutes"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
