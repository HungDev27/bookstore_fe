import React from "react";

function Navbar() {
	return (
		<header>
			{/* ===== TOP HEADER ===== */}
			<div className="bg-white border-bottom py-2">
				<div className="container d-flex align-items-center justify-content-between">

					{/* Logo */}
					<div className="d-flex align-items-center">
						<img
							src="https://alphabooks.vn/wp-content/uploads/2020/09/logo-alphabooks.png"
							alt="Logo"
							style={{ height: "40px" }}
						/>
					</div>

					{/* Search */}
					<form className="d-flex flex-grow-1 mx-4">
						<input
							className="form-control rounded-0"
							type="search"
							placeholder="Tìm kiếm..."
						/>
						<button className="btn btn-primary rounded-0 text-white">
							<i className="fas fa-search"></i>
						</button>
					</form>

					{/* Right icons */}
					<div className="d-flex align-items-center gap-4">
						<div className="d-flex align-items-center">
							<i className="fas fa-headset me-2 text-primary"></i>
							<div style={{ fontSize: "13px" }}>
								<div>Gọi đặt hàng</div>
								<strong>0932 329 959</strong>
							</div>
						</div>

						<div className="text-center">
							<i className="far fa-user"></i>
							<div style={{ fontSize: "13px" }}>Đăng nhập</div>
						</div>

						<div className="position-relative text-center">
							<i className="fas fa-shopping-cart"></i>
							<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
								0
							</span>
							<div style={{ fontSize: "13px" }}>Giỏ hàng</div>
						</div>
					</div>

				</div>
			</div>

			{/* ===== MENU BAR (ĐÃ CHỈNH MÀU XANH) ===== */}
			<div className="bg-primary">
				<div className="container d-flex align-items-center">

					{/* Category */}
					<div className="text-white fw-bold py-2 me-4">
						<i className="fas fa-bars me-2"></i>
						TẤT CẢ DANH MỤC
					</div>

					{/* Menu */}
					<ul className="nav">
						<li className="nav-item">
							<a className="nav-link text-white fw-semibold" href="#">Giới thiệu</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white fw-semibold" href="#">Tin tức</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white fw-semibold" href="#">Review sách</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle text-white fw-semibold"
								data-bs-toggle="dropdown"
								href="#"
							>
								Hợp tác
							</a>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#">Nhà xuất bản</a></li>
								<li><a className="dropdown-item" href="#">Tác giả</a></li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white fw-semibold" href="#">Tra cứu đơn</a>
						</li>
					</ul>

				</div>
			</div>
		</header>
	);
}

export default Navbar;
