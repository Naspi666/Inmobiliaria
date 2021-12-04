export const index = async (req, res) => {
    if (req.isAuthenticated()){
        return next();
      }
      res.redirect('/')
};