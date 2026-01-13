import React from "react";

function Footer() {
	return (
		<div className='bg-dark text-center text-white'>
			<div className='container p-4'>

				{/* Social media */}
				<section className='mb-4'>
					<a className='btn btn-outline-light btn-floating m-1' href='https://facebook.com' role='button'>
						<i className='fab fa-facebook-f'></i>
					</a>

					<a className='btn btn-outline-light btn-floating m-1' href='https://twitter.com' role='button'>
						<i className='fab fa-twitter'></i>
					</a>

					<a className='btn btn-outline-light btn-floating m-1' href='https://instagram.com' role='button'>
						<i className='fab fa-instagram'></i>
					</a>

					<a className='btn btn-outline-light btn-floating m-1' href='https://github.com' role='button'>
						<i className='fab fa-github'></i>
					</a>
				</section>

				{/* Newsletter */}
				<section>
					<form>
						<div className='row d-flex justify-content-center'>
							<div className='col-auto'>
								<p className='pt-2'>
									<strong>Đăng ký nhận tin khuyến mãi</strong>
								</p>
							</div>

							<div className='col-md-5 col-12'>
								<div className='mb-4'>
									<input
										type='email'
										className='form-control'
										placeholder='Nhập email của bạn'
									/>
								</div>
							</div>

							<div className='col-auto'>
								<button type='submit' className='btn btn-outline-light mb-4'>
									Đăng ký
								</button>
							</div>
						</div>
					</form>
				</section>

				{/* Giới thiệu */}
				<section className='mb-4'>
					<p>
						<strong>BookStore</strong> là website bán sách trực tuyến, cung cấp
						các đầu sách đa dạng từ văn học, kinh tế, kỹ năng sống đến
						sách thiếu nhi. Cam kết sách chính hãng, giao hàng nhanh,
						giá cả hợp lý.
					</p>
				</section>

				{/* Links */}
				<section>
					<div className='row'>

						<div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
							<h5 className='text-uppercase'>Danh mục sách</h5>
							<ul className='list-unstyled mb-0'>
								<li><a href='#' className='text-white'>Văn học</a></li>
								<li><a href='#' className='text-white'>Kinh tế</a></li>
								<li><a href='#' className='text-white'>Kỹ năng sống</a></li>
								<li><a href='#' className='text-white'>Thiếu nhi</a></li>
							</ul>
						</div>

						<div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
							<h5 className='text-uppercase'>Hỗ trợ khách hàng</h5>
							<ul className='list-unstyled mb-0'>
								<li><a href='#' className='text-white'>Hướng dẫn mua hàng</a></li>
								<li><a href='#' className='text-white'>Chính sách đổi trả</a></li>
								<li><a href='#' className='text-white'>Thanh toán</a></li>
								<li><a href='#' className='text-white'>Vận chuyển</a></li>
							</ul>
						</div>

						<div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
							<h5 className='text-uppercase'>Về chúng tôi</h5>
							<ul className='list-unstyled mb-0'>
								<li><a href='#' className='text-white'>Giới thiệu</a></li>
								<li><a href='#' className='text-white'>Liên hệ</a></li>
								<li><a href='#' className='text-white'>Tuyển dụng</a></li>
								<li><a href='#' className='text-white'>Tin tức</a></li>
							</ul>
						</div>

						<div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
							<h5 className='text-uppercase'>Liên hệ</h5>
							<ul className='list-unstyled mb-0'>
								<li className='text-white'>📍 Hà Nội, Việt Nam</li>
								<li className='text-white'>📞 0123 456 789</li>
								<li className='text-white'>📧 support@bookstore.vn</li>
							</ul>
						</div>

					</div>
				</section>
			</div>

			{/* Copyright */}
			<div
				className='text-center p-3'
				style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
			>
				© {new Date().getFullYear()} BookStore. All rights reserved.
			</div>
		</div>
	);
}

export default Footer;
