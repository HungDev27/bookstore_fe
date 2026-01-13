import React from "react";

function Banner() {
	return (
		<div className="container">
			<div
				id="carouselExample"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="https://theme.hstatic.net/200000692705/1001223630/14/slide_1_img.jpg?v=1661"
							className="d-block w-100"
							style={{ height: "450px", objectFit: "cover" }}
							alt="Banner 1"
						/>
					</div>

					<div className="carousel-item">
						<img
							src="https://cdn.hstatic.net/files/200000692705/collection/bst_combo___sach_kho_lon_e7299d1639de475a9faf2d3d3713ef55_1024x1024.png"
							className="d-block w-100"
							style={{ height: "450px", objectFit: "cover" }}
							alt="Banner 2"
						/>
					</div>

					<div className="carousel-item">
						<img
							src="https://theme.hstatic.net/200000663439/1001056805/14/slider_1.jpg?v=6812"
							className="d-block w-100"
							style={{ height: "450px", objectFit: "cover" }}
							alt="Banner 3"
						/>
					</div>

				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExample"
					data-bs-slide="prev"
				>
					<span className="carousel-control-prev-icon"></span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExample"
					data-bs-slide="next"
				>
					<span className="carousel-control-next-icon"></span>
				</button>

			</div>
            
		</div>
	);
}

export default Banner;
