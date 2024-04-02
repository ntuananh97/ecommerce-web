class AccessController {
  async signUp(req, res, next) {
    try {
        console.log('signUp::req.body', req.body);
        // 200: ok
        // 201: created
        return res.status(201).json({ code: '20001', metadata: {
            useId: 1
        } });
    }
    catch (error) {
      next(error);
    }
  }
}

module.exports = new AccessController();