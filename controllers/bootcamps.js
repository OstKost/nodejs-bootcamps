// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true });
};

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
exports.getBootcamp = (req, res, next) => {
  //   const bootcamp = await Bootcamp.findById(req.params.id);

  //   if (!bootcamp) {
  //     return next(
  //       new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
  //     );
  //   }

  res.status(200).json({ success: true, data: 1 });
};

// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private
exports.createBootcamp = (req, res, next) => {
  //   // Add user to req,body
  //   req.body.user = req.user.id;

  //   // Check for published bootcamp
  //   const publishedBootcamp = await Bootcamp.findOne({ user: req.user.id });

  //   // If the user is not an admin, they can only add one bootcamp
  //   if (publishedBootcamp && req.user.role !== 'admin') {
  //     return next(
  //       new ErrorResponse(
  //         `The user with ID ${req.user.id} has already published a bootcamp`,
  //         400
  //       )
  //     );
  //   }

  //   const bootcamp = await Bootcamp.create(req.body);

  res.status(201).json({
    success: true,
    data: 1,
  });
};

// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
exports.updateBootcamp = (req, res, next) => {
  //   let bootcamp = await Bootcamp.findById(req.params.id);

  //   if (!bootcamp) {
  //     return next(
  //       new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
  //     );
  //   }

  //   // Make sure user is bootcamp owner
  //   if (bootcamp.user.toString() !== req.user.id && req.user.role !== 'admin') {
  //     return next(
  //       new ErrorResponse(
  //         `User ${req.user.id} is not authorized to update this bootcamp`,
  //         401
  //       )
  //     );
  //   }

  //   bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
  //     new: true,
  //     runValidators: true
  //   });

  res.status(200).json({ success: true, data: 1 });
};

// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
exports.deleteBootcamp = (req, res, next) => {
  //   const bootcamp = await Bootcamp.findById(req.params.id);

  //   if (!bootcamp) {
  //     return next(
  //       new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
  //     );
  //   }

  //   // Make sure user is bootcamp owner
  //   if (bootcamp.user.toString() !== req.user.id && req.user.role !== 'admin') {
  //     return next(
  //       new ErrorResponse(
  //         `User ${req.user.id} is not authorized to delete this bootcamp`,
  //         401
  //       )
  //     );
  //   }

  //   await bootcamp.remove();

  res.status(200).json({ success: true, data: {} });
};
