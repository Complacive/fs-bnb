const express = require ('express');
const app = express();
const cors = require('cors');
//const jwtAuth = require(./src)

// Allows access from device
app.use(cors());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use ((req, res, next) => {
    console.log("This middleware function was executed");
    console.log(req.body);
    next();
});

// route middleware
app.use("/api/user", require("./src/api/user-routes"));
app.use("/api/auth", require ('./src/api/auth-routes'));
app.use("/api/provider", require("./src/api/provider-routes"));
app.use("/api/admin", require("./src/api/admin-routes"));
app.use("/api/listings", require('./src/api/listings-routes'));
app.use("/api/listingUrl", require('./src/api/listing-imgurl-mapping-routes'));
app.use("/api/bookings", require('./src/api/booking-routes'));

 
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));