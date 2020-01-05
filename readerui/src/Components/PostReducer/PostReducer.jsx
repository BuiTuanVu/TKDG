import React, { Component } from 'react';

import { accept, reject, ACCEPT } from './PostAction';

const dataPost = {
	postsData: [
		{
			id: 1,
			title: 'Sập vũ trường, nhiều người bị thương',
			img: 'https://photo-2-baomoi.zadn.vn/w300_r3x2/2020_01_03_14_33536233/d75b8f0d6c4d8513dc5c.jpg',
			cate: 'Thời sự',
			des: 'Sập vũ trường King Night ở Vũng Tàu: 1 người chết, 6 người bị thương',
			date: '02/01/2019 22:00 ',
			status: 0,
			vip: 0,
			view: 40,
			writer: 'Minh Long',
			content: (
				<div>
					<p>
						V&agrave;o 23h ng&agrave;y 3-1(giờ Việt Nam) fanpage của CLB Heerenveen đăng tải một loạt bức
						ảnh với ch&uacute; th&iacute;ch rằng đ&oacute; l&agrave; buổi luyện tập đầu ti&ecirc;n của
						c&aacute;c cầu thủ trong năm mới 2020 v&agrave; ng&agrave;y mai (tức 4-1) cả đội sẽ di chuyển
						tới T&acirc;y Ban Nha nơi c&oacute; thời tiết ấm &aacute;p hơn.
					</p>
					<center>
						<table class="contentimg">
							<tbody>
								<tr>
									<td class="img">
										<img
											src="http://static.cand.com.vn/Files/Image/nguyenbinh/2020/01/04/thumb_660_0b6d8043-038e-426e-994e-0b3e2c20de7a.jpg"
											alt=""
										/>
									</td>
								</tr>
								<tr>
									<td class="note">Văn Hậu đội mưa luyện tập. Ảnh:&nbsp;Heerenveen</td>
								</tr>
							</tbody>
						</table>
					</center>
					<p>
						Như thường lệ, c&aacute;c CĐV Việt Nam ngay lập tức v&agrave;o t&igrave;m kiếm bức ảnh c&oacute;
						sự hiện diện của Văn Hậu. Sự quan t&acirc;m của người h&acirc;m mộ Việt Nam được thấy r&otilde;
						qua số lượt y&ecirc;u th&iacute;ch v&agrave; b&igrave;nh luận vượt trội.&nbsp;
					</p>
					<p>
						T&iacute;nh đến 11h s&aacute;ng 4-1, trong khi những bức ảnh kh&aacute;c chỉ nhận được khoảng
						100 lượt th&iacute;ch th&igrave; con số n&agrave;y ở bức ảnh c&oacute; Văn Hậu l&ecirc;n tới
						4.700 v&agrave; thu h&uacute;t tới 274 lượt b&igrave;nh luận.
					</p>
					<center>
						<table class="contentimg">
							<tbody>
								<tr>
									<td class="img">
										<img
											src="http://static.cand.com.vn/Files/Image/nguyenbinh/2020/01/04/thumb_660_93510286-8f52-4805-8fb5-798447ad075e.jpg"
											alt=""
										/>
									</td>
								</tr>
								<tr>
									<td class="note">
										Bức ảnh c&oacute; mặt Văn Hậu nhận được&nbsp; sự ch&uacute; &yacute; cao từ CĐV
										Việt Nam
									</td>
								</tr>
							</tbody>
						</table>
					</center>
					<p>
						Hầu hết c&aacute;c b&igrave;nh luận đều tỏ ra cảm th&ocirc;ng với sự kh&oacute; khăn trong luyện
						tập của cầu thủ người Việt Nam ở H&agrave; Lan, nhưng cũng c&oacute; kh&ocirc;ng &iacute;t
						b&igrave;nh luận kh&aacute; l&agrave; ... "dị".&nbsp;
					</p>
					<p>
						Đơn cử như một CĐV c&oacute; t&ecirc;n Nguyễn C&ocirc;ng Thanh khuy&ecirc;n Văn Hậu n&ecirc;n...
						đi cắt t&oacute;c sau khi chứng kiến m&aacute;i đầu ướt đẫm của cầu thủ n&agrave;y trong buổi
						tập. Một người kh&aacute;c th&igrave; nhận x&eacute;t rằng : "Trời mưa t&oacute;c d&agrave;i ướt
						v&atilde;i cả ướt đẫm v&igrave; tập luyện hơn c&aacute;c cầu thủ kh&aacute;c".
					</p>
				</div>
			)
		},
		{
			id: 2,
			title: 'U-23 VN thiếu Văn Hậu, Triều Tiên vắng đồng đội của Ronaldo',
			img: 'https://image.anninhthudo.vn/w700/uploaded/83/2020_01_04/hau.jpg',
			cate: 'Thể thao',
			des: 'Nguy cơ Đoàn Văn Hậu không được về khoác áo U-23 Việt Nam đá vòng chung kết U-23 châu Á',
			date: '02/01/2019 22:00 ',
			status: 0,
			vip: 0,
			view: 1000,
			writer: 'Minh Long',
			content: (
				<div>
					<p>
						V&agrave;o 23h ng&agrave;y 3-1(giờ Việt Nam) fanpage của CLB Heerenveen đăng tải một loạt bức
						ảnh với ch&uacute; th&iacute;ch rằng đ&oacute; l&agrave; buổi luyện tập đầu ti&ecirc;n của
						c&aacute;c cầu thủ trong năm mới 2020 v&agrave; ng&agrave;y mai (tức 4-1) cả đội sẽ di chuyển
						tới T&acirc;y Ban Nha nơi c&oacute; thời tiết ấm &aacute;p hơn.
					</p>
					<center>
						<table class="contentimg">
							<tbody>
								<tr>
									<td class="img">
										<img
											src="http://static.cand.com.vn/Files/Image/nguyenbinh/2020/01/04/thumb_660_0b6d8043-038e-426e-994e-0b3e2c20de7a.jpg"
											alt=""
										/>
									</td>
								</tr>
								<tr>
									<td class="note">Văn Hậu đội mưa luyện tập. Ảnh:&nbsp;Heerenveen</td>
								</tr>
							</tbody>
						</table>
					</center>
					<p>
						Như thường lệ, c&aacute;c CĐV Việt Nam ngay lập tức v&agrave;o t&igrave;m kiếm bức ảnh c&oacute;
						sự hiện diện của Văn Hậu. Sự quan t&acirc;m của người h&acirc;m mộ Việt Nam được thấy r&otilde;
						qua số lượt y&ecirc;u th&iacute;ch v&agrave; b&igrave;nh luận vượt trội.&nbsp;
					</p>
					<p>
						T&iacute;nh đến 11h s&aacute;ng 4-1, trong khi những bức ảnh kh&aacute;c chỉ nhận được khoảng
						100 lượt th&iacute;ch th&igrave; con số n&agrave;y ở bức ảnh c&oacute; Văn Hậu l&ecirc;n tới
						4.700 v&agrave; thu h&uacute;t tới 274 lượt b&igrave;nh luận.
					</p>
					<center>
						<table class="contentimg">
							<tbody>
								<tr>
									<td class="img">
										<img
											src="http://static.cand.com.vn/Files/Image/nguyenbinh/2020/01/04/thumb_660_93510286-8f52-4805-8fb5-798447ad075e.jpg"
											alt=""
										/>
									</td>
								</tr>
								<tr>
									<td class="note">
										Bức ảnh c&oacute; mặt Văn Hậu nhận được&nbsp; sự ch&uacute; &yacute; cao từ CĐV
										Việt Nam
									</td>
								</tr>
							</tbody>
						</table>
					</center>
					<p>
						Hầu hết c&aacute;c b&igrave;nh luận đều tỏ ra cảm th&ocirc;ng với sự kh&oacute; khăn trong luyện
						tập của cầu thủ người Việt Nam ở H&agrave; Lan, nhưng cũng c&oacute; kh&ocirc;ng &iacute;t
						b&igrave;nh luận kh&aacute; l&agrave; ... "dị".&nbsp;
					</p>
					<p>
						Đơn cử như một CĐV c&oacute; t&ecirc;n Nguyễn C&ocirc;ng Thanh khuy&ecirc;n Văn Hậu n&ecirc;n...
						đi cắt t&oacute;c sau khi chứng kiến m&aacute;i đầu ướt đẫm của cầu thủ n&agrave;y trong buổi
						tập. Một người kh&aacute;c th&igrave; nhận x&eacute;t rằng : "Trời mưa t&oacute;c d&agrave;i ướt
						v&atilde;i cả ướt đẫm v&igrave; tập luyện hơn c&aacute;c cầu thủ kh&aacute;c".
					</p>
				</div>
			)
		},
		{
			id: 3,
			title: 'Sáng mai 5-1, khởi tranh Giải "Chinh phục đỉnh cao Bà Rá"',
			img: 'https://photo-1-baomoi.zadn.vn/w300_r3x2/2020_01_04_423_33536475/defb4fb9a4f94da714e8.jpg',
			cate: 'Thể thao',
			des:
				'Sáng mai 5-1, tại Bình Phước sẽ diễn ra Giải việt dã leo núi toàn quốc Chinh phục đỉnh cao Bà Rá lần thứ 26-2020',
			date: '02/01/2019 22:00 ',
			status: 0,
			vip: 0,
			view: 420,
			writer: 'Bá Long',
			content: (
				<div>
					<p>
						V&agrave;o 23h ng&agrave;y 3-1(giờ Việt Nam) fanpage của CLB Heerenveen đăng tải một loạt bức
						ảnh với ch&uacute; th&iacute;ch rằng đ&oacute; l&agrave; buổi luyện tập đầu ti&ecirc;n của
						c&aacute;c cầu thủ trong năm mới 2020 v&agrave; ng&agrave;y mai (tức 4-1) cả đội sẽ di chuyển
						tới T&acirc;y Ban Nha nơi c&oacute; thời tiết ấm &aacute;p hơn.
					</p>
					<center>
						<table class="contentimg">
							<tbody>
								<tr>
									<td class="img">
										<img
											src="http://static.cand.com.vn/Files/Image/nguyenbinh/2020/01/04/thumb_660_0b6d8043-038e-426e-994e-0b3e2c20de7a.jpg"
											alt=""
										/>
									</td>
								</tr>
								<tr>
									<td class="note">Văn Hậu đội mưa luyện tập. Ảnh:&nbsp;Heerenveen</td>
								</tr>
							</tbody>
						</table>
					</center>
					<p>
						Như thường lệ, c&aacute;c CĐV Việt Nam ngay lập tức v&agrave;o t&igrave;m kiếm bức ảnh c&oacute;
						sự hiện diện của Văn Hậu. Sự quan t&acirc;m của người h&acirc;m mộ Việt Nam được thấy r&otilde;
						qua số lượt y&ecirc;u th&iacute;ch v&agrave; b&igrave;nh luận vượt trội.&nbsp;
					</p>
					<p>
						T&iacute;nh đến 11h s&aacute;ng 4-1, trong khi những bức ảnh kh&aacute;c chỉ nhận được khoảng
						100 lượt th&iacute;ch th&igrave; con số n&agrave;y ở bức ảnh c&oacute; Văn Hậu l&ecirc;n tới
						4.700 v&agrave; thu h&uacute;t tới 274 lượt b&igrave;nh luận.
					</p>
					<center>
						<table class="contentimg">
							<tbody>
								<tr>
									<td class="img">
										<img
											src="http://static.cand.com.vn/Files/Image/nguyenbinh/2020/01/04/thumb_660_93510286-8f52-4805-8fb5-798447ad075e.jpg"
											alt=""
										/>
									</td>
								</tr>
								<tr>
									<td class="note">
										Bức ảnh c&oacute; mặt Văn Hậu nhận được&nbsp; sự ch&uacute; &yacute; cao từ CĐV
										Việt Nam
									</td>
								</tr>
							</tbody>
						</table>
					</center>
					<p>
						Hầu hết c&aacute;c b&igrave;nh luận đều tỏ ra cảm th&ocirc;ng với sự kh&oacute; khăn trong luyện
						tập của cầu thủ người Việt Nam ở H&agrave; Lan, nhưng cũng c&oacute; kh&ocirc;ng &iacute;t
						b&igrave;nh luận kh&aacute; l&agrave; ... "dị".&nbsp;
					</p>
					<p>
						Đơn cử như một CĐV c&oacute; t&ecirc;n Nguyễn C&ocirc;ng Thanh khuy&ecirc;n Văn Hậu n&ecirc;n...
						đi cắt t&oacute;c sau khi chứng kiến m&aacute;i đầu ướt đẫm của cầu thủ n&agrave;y trong buổi
						tập. Một người kh&aacute;c th&igrave; nhận x&eacute;t rằng : "Trời mưa t&oacute;c d&agrave;i ướt
						v&atilde;i cả ướt đẫm v&igrave; tập luyện hơn c&aacute;c cầu thủ kh&aacute;c".
					</p>
				</div>
			)
		},
		{
			id: 4,
			title: 'Giải ngoại hạng Anh: Liverpool vô đối',
			img: 'https://photo-2-baomoi.zadn.vn/w300_r3x2/2020_01_03_423_33536122/10c2219bc2db2b8572ca.jpg',
			cate: 'Thể thao',
			des: 'Liverpool thắng dễ Sheffield 2-0 để nối dài mạch bất bại và tiếp tục bỏ xa 2 đối thủ cạnh tranh',
			date: '02/01/2019 22:00 ',
			status: 0,
			vip: 0,
			view: 500,
			writer: 'Vũ Long',
			content: (
				<div>
					<p>
						V&agrave;o 23h ng&agrave;y 3-1(giờ Việt Nam) fanpage của CLB Heerenveen đăng tải một loạt bức
						ảnh với ch&uacute; th&iacute;ch rằng đ&oacute; l&agrave; buổi luyện tập đầu ti&ecirc;n của
						c&aacute;c cầu thủ trong năm mới 2020 v&agrave; ng&agrave;y mai (tức 4-1) cả đội sẽ di chuyển
						tới T&acirc;y Ban Nha nơi c&oacute; thời tiết ấm &aacute;p hơn.
					</p>
					<center>
						<table class="contentimg">
							<tbody>
								<tr>
									<td class="img">
										<img
											src="http://static.cand.com.vn/Files/Image/nguyenbinh/2020/01/04/thumb_660_0b6d8043-038e-426e-994e-0b3e2c20de7a.jpg"
											alt=""
										/>
									</td>
								</tr>
								<tr>
									<td class="note">Văn Hậu đội mưa luyện tập. Ảnh:&nbsp;Heerenveen</td>
								</tr>
							</tbody>
						</table>
					</center>
					<p>
						Như thường lệ, c&aacute;c CĐV Việt Nam ngay lập tức v&agrave;o t&igrave;m kiếm bức ảnh c&oacute;
						sự hiện diện của Văn Hậu. Sự quan t&acirc;m của người h&acirc;m mộ Việt Nam được thấy r&otilde;
						qua số lượt y&ecirc;u th&iacute;ch v&agrave; b&igrave;nh luận vượt trội.&nbsp;
					</p>
					<p>
						T&iacute;nh đến 11h s&aacute;ng 4-1, trong khi những bức ảnh kh&aacute;c chỉ nhận được khoảng
						100 lượt th&iacute;ch th&igrave; con số n&agrave;y ở bức ảnh c&oacute; Văn Hậu l&ecirc;n tới
						4.700 v&agrave; thu h&uacute;t tới 274 lượt b&igrave;nh luận.
					</p>
					<center>
						<table class="contentimg">
							<tbody>
								<tr>
									<td class="img">
										<img
											src="http://static.cand.com.vn/Files/Image/nguyenbinh/2020/01/04/thumb_660_93510286-8f52-4805-8fb5-798447ad075e.jpg"
											alt=""
										/>
									</td>
								</tr>
								<tr>
									<td class="note">
										Bức ảnh c&oacute; mặt Văn Hậu nhận được&nbsp; sự ch&uacute; &yacute; cao từ CĐV
										Việt Nam
									</td>
								</tr>
							</tbody>
						</table>
					</center>
					<p>
						Hầu hết c&aacute;c b&igrave;nh luận đều tỏ ra cảm th&ocirc;ng với sự kh&oacute; khăn trong luyện
						tập của cầu thủ người Việt Nam ở H&agrave; Lan, nhưng cũng c&oacute; kh&ocirc;ng &iacute;t
						b&igrave;nh luận kh&aacute; l&agrave; ... "dị".&nbsp;
					</p>
					<p>
						Đơn cử như một CĐV c&oacute; t&ecirc;n Nguyễn C&ocirc;ng Thanh khuy&ecirc;n Văn Hậu n&ecirc;n...
						đi cắt t&oacute;c sau khi chứng kiến m&aacute;i đầu ướt đẫm của cầu thủ n&agrave;y trong buổi
						tập. Một người kh&aacute;c th&igrave; nhận x&eacute;t rằng : "Trời mưa t&oacute;c d&agrave;i ướt
						v&atilde;i cả ướt đẫm v&igrave; tập luyện hơn c&aacute;c cầu thủ kh&aacute;c".
					</p>
				</div>
			)
		},
		{
			id: 5,
			img: 'https://photo-2-baomoi.zadn.vn/w300_r3x2/2020_01_04_23_33540715/d90b71ebadab44f51dba.jpg',
			title: 'Thầy Park gặp riêng hàng thủ sau trận thua Bahrain',
			cate: 'Thể thao',
			des: 'U23 thu được nhiều kết quả, nhưng HLV Park vẫn có những điều không hài lòng sau trận thua Bahrain ',
			date: '03/01/2019 10:00  ',
			status: 0,
			vip: 0,
			view: 120,
			writer: 'Vũ Long',
			content: (
				<div style={{ width: '100%' }}>
					<p class="t-j">
						{' '}
						Chiều 3/1, U23 Việt Nam c&oacute; trận đấu tổng duyệt gặp U23 Bahrain tại Bangkok, nhằm chuẩn bị
						cho VCK U23 ch&acirc;u &Aacute; 2020. Đ&acirc;y l&agrave; trận đấu HLV Park Hang Seo c&oacute;
						nhiều sự thử nghiệm, cả về nh&acirc;n sự lẫn lối chơi. Trong số 25 cầu thủ, &ocirc;ng thầy người
						H&agrave;n Quốc chỉ kh&ocirc;ng sử dụng duy nhất&nbsp;thủ m&ocirc;n Y &Ecirc;li Ni&ecirc;.
					</p>
					<p class="t-j">
						Ở trận đấu n&agrave;y,&nbsp;<a href="https://vietnamnet.vn/u23-viet-nam-tag62420.html">
							U23 Việt Nam
						</a>&nbsp;đ&atilde; bị đối thủ dẫn trước 2 b&agrave;n trong hiệp 1, sau đ&oacute; r&uacute;t
						ngắn v&agrave; ấn định tỷ số 1-2 với b&agrave;n thắng của Tấn Sinh tr&ecirc;n chấm 11m những
						ph&uacute;t cuối hiệp 2.
					</p>

					<img
						src="https://vnn-imgs-f.vgcloud.vn/2020/01/04/11/u23-vietnam.jpg"
						alt="Thầy Park gặp ri&ecirc;ng h&agrave;ng thủ U23 Việt Nam sau trận thua Bahrain"
					/>

					<p class="t-j">
						Với một trận giao hữu, r&otilde; r&agrave;ng mục đ&iacute;ch ch&iacute;nh l&agrave; thử nghiệm,
						v&agrave; HLV Park Hang Seo đ&atilde; thu được nhiều kết quả. Tuy nhi&ecirc;n, chiến lược gia
						người H&agrave;n Quốc cũng tỏ ra kh&ocirc;ng h&agrave;i l&ograve;ng với kh&acirc;u tổ chức của
						h&agrave;ng ph&ograve;ng ngự U23 Việt Nam.
					</p>

					<div class="box-taitro clearfix">
						<div class="VnnAdsPos clearfix" data-pos="vt_detail_sponsor_center">
							&nbsp;
						</div>
					</div>
					<p class="t-j">
						B&ecirc;n cạnh đ&oacute;, hai cầu thủ Thanh Thịnh v&agrave; Trọng H&ugrave;ng cũng chưa
						ho&agrave;n to&agrave;n b&igrave;nh phục. Hai trụ cột n&agrave;y tiếp tục được b&aacute;c sĩ
						Choi Ju Young đưa đi kiểm tra lại một lần nữa mức độ hồi phục sau trận thua Bahrain.
					</p>
					<p class="t-j">
						Tin vui với&nbsp;<a href="https://vietnamnet.vn/hlv-park-hang-seo-tag161113.html">
							HLV Park Hang Seo
						</a>&nbsp;l&agrave; sau trận đấu với Bahrain, U23 Việt Nam kh&ocirc;ng c&oacute; cầu thủ
						n&agrave;o chấn thương. &Ocirc;ng thầy người H&agrave;n Quốc cho c&aacute;c cầu thủ dự bị ra
						s&acirc;n tập s&aacute;ng 4/1, trong khi cầu thủ đ&aacute; ch&iacute;nh tập GYM tại kh&aacute;ch
						sạn.
					</p>
					<p class="t-j">
						U23 Việt Nam c&ograve;n 2 buổi tập nữa tại Bangkok, trước khi di chuyển 400km xuống Buriram để
						chuẩn bị bước v&agrave;o h&agrave;nh tr&igrave;nh "săn" v&eacute; Olympic 2020.
					</p>
				</div>
			)
		},
		{
			id: 6,
			img: 'https://znews-photo.zadn.vn/w480/Uploaded/nugzrd/2020_01_04/cd76dda5a91750490906.jpg',
			title: 'Vợ hoảng hốt phát hiện chồng treo cổ sau hiên nhà',
			cate: 'Thời sự - Thường nhật',
			des:
				'Ngày 4/1, Cơ quan cảnh sát điều tra Công an tỉnh Bình Phước hoàn tất khám nghiệm hiện trường để điều tra cái chết của ông Vũ Anh Kiệt',
			date: '03/01/2019 12:00  ',
			status: 0,
			vip: 0,
			view: 3000,
			writer: 'Vũ Long',
			content: (
				<div>
					<p>&Ocirc;ng Kiệt được người nh&agrave; ph&aacute;t hiện tử vong trong tư thế treo cổ.</p>
					<table class="picture" align="center">
						<tbody>
							<tr>
								<td class="pic">
									<img
										src="https://znews-photo.zadn.vn/w660/Uploaded/nugzrd/2020_01_04/cd76dda5a91750490906.jpg"
										alt="Vo hoang hot phat hien chong treo co sau hien nha hinh anh 1 cd76dda5a91750490906.jpg"
									/>
								</td>
							</tr>
							<tr>
								<td class="pCaption caption">
									<p>
										Người nh&agrave; đang tổ chức hậu sự cho nạn nh&acirc;n. Ảnh:&nbsp;<em>L.Ng&acirc;n.</em>
									</p>
								</td>
							</tr>
						</tbody>
					</table>
					<p>
						Th&ocirc;ng tin ban đầu, khoảng 5h20 c&ugrave;ng ng&agrave;y, b&agrave; B&ugrave;i Thị Ấm, vợ
						&ocirc;ng Kiệt mở cửa nh&agrave; th&igrave; hoảng hốt thấy chồng trong tư thế treo cổ. Người vợ
						h&ocirc; ho&aacute;n mọi người đến cứu nhưng &ocirc;ng Kiệt đ&atilde; tử vong.
					</p>
					<p>
						Theo người nh&agrave;, trước khi xảy ra vụ việc &ocirc;ng Kiệt sinh hoạt b&igrave;nh thường,
						kh&ocirc;ng m&acirc;u thuẫn với ai.
					</p>
					<p>Nguy&ecirc;n nh&acirc;n vụ việc đang được điều tra.</p>
				</div>
			)
		},
		{
			id: 7,
			img: 'https://znews-photo.zadn.vn/w860/Uploaded/pcwvopbb/2020_01_03/npt.jpg',
			title: 'Thông điệp năm mới của Tổng bí thư Nguyễn Phú Trọng',
			cate: 'Thời sự - Chính trị',
			des:
				'Tổng bí thư, Chủ tịch nước Nguyễn Phú Trọng đã chia sẻ những cảm xúc, suy ngẫm về những công việc mà toàn Đảng, toàn dân và toàn quân ta đã và đang nỗ lực phấn đấu.',
			date: '03/01/2019 14:00  ',
			status: 0,
			vip: 0,
			view: 2000,
			writer: 'Vũ Long',
			content: (
				<div>
					<p>
						Tết đến, Xu&acirc;n về đ&uacute;ng v&agrave;o dịp kỷ niệm 90 năm Ng&agrave;y th&agrave;nh lập
						Đảng. Trong kh&ocirc;ng kh&iacute; vui mừng phấn khởi của những ng&agrave;y đầu Xu&acirc;n Canh
						T&yacute; 2020, Tổng b&iacute; thư, Chủ tịch nước&nbsp;<a
							class="topic person autolink"
							title="Tin tức Nguyễn Ph&uacute; Trọng"
							href="https://news.zing.vn/tieu-diem/nguyen-phu-trong.html"
						>
							Nguyễn Ph&uacute; Trọng
						</a>&nbsp;đ&atilde; d&agrave;nh thời gian trả lời phỏng vấn của Th&ocirc;ng tấn x&atilde; Việt
						Nam.
					</p>
					<p>
						Tổng b&iacute; thư, Chủ tịch nước Nguyễn Ph&uacute; Trọng đ&atilde; chia sẻ những cảm
						x&uacute;c, suy ngẫm về những c&ocirc;ng việc m&agrave; to&agrave;n Đảng, to&agrave;n d&acirc;n
						v&agrave; to&agrave;n qu&acirc;n ta đ&atilde; v&agrave; đang nỗ lực phấn đấu để đạt được
						th&agrave;nh quả như ng&agrave;y h&ocirc;m nay.
					</p>
					<p>
						Hiển hiện trong đ&oacute; l&agrave; tất cả t&acirc;m huyết, tr&iacute; tuệ v&agrave; niềm tin,
						l&agrave; kh&aacute;t vọng vươn tới một tương lai rạng rỡ của Đảng, của d&acirc;n tộc, v&igrave;
						một nước Việt Nam h&ograve;a b&igrave;nh, độc lập v&agrave; ph&aacute;t triển cường thịnh.
					</p>
					<table class="picture" align="center">
						<tbody>
							<tr>
								<td class="pic">
									<img
										src="https://znews-photo.zadn.vn/w1024/Uploaded/xpcwvovb/2020_01_03/nguyenphutrong_zing.jpg"
										alt="Thong diep nam moi cua Tong bi thu Nguyen Phu Trong hinh anh 1 tbt.jpg"
									/>
								</td>
							</tr>
							<tr>
								<td class="pCaption caption">
									<p>
										Tổng b&iacute; thư, Chủ tịch nước Nguyễn Ph&uacute; Trọng. Ảnh:&nbsp;<em>Ho&agrave;ng H&agrave;.</em>
									</p>
								</td>
							</tr>
						</tbody>
					</table>
					<p>
						<em>
							- Trong kh&ocirc;ng kh&iacute; phấn khởi, tự h&agrave;o, cảm x&uacute;c đ&oacute;n
							m&ugrave;a Xu&acirc;n mới cũng l&agrave; dịp kỷ niệm 90 năm Ng&agrave;y th&agrave;nh
							lập&nbsp;<a
								class="topic company autolink"
								title="Tin tức Đảng Cộng sản Việt Nam"
								href="https://news.zing.vn/tieu-diem/dang-cong-san-viet-nam.html"
							>
								Đảng Cộng sản Việt Nam
							</a>&nbsp;quang vinh, xin Tổng b&iacute; thư, Chủ tịch nước c&oacute; thể chia sẻ đ&ocirc;i
							điều suy ngẫm với bạn đọc?
						</em>
					</p>
					<p>
						<strong>-&nbsp;</strong>Thực tiễn phong ph&uacute; của c&aacute;ch mạng Việt Nam từ ng&agrave;y
						c&oacute; Đảng đến nay đ&atilde; chứng minh rằng, sự l&atilde;nh đạo đ&uacute;ng đắn v&agrave;
						s&aacute;ng suốt của Đảng l&agrave; nh&acirc;n tố h&agrave;ng đầu quyết định mọi thắng lợi của
						c&aacute;ch mạng nước ta, l&agrave;m n&ecirc;n nhiều kỳ t&iacute;ch tr&ecirc;n đất nước Việt
						Nam.
					</p>
					<p>
						Ch&iacute;nh trong qu&aacute; tr&igrave;nh l&atilde;nh đạo c&aacute;ch mạng, Đảng ta được
						t&ocirc;i luyện, thử th&aacute;ch v&agrave; kh&ocirc;ng ngừng trưởng th&agrave;nh, d&agrave;y
						dạn kinh nghiệm để ng&agrave;y c&agrave;ng xứng đ&aacute;ng với vai tr&ograve; v&agrave; sứ mệnh
						l&atilde;nh đạo c&aacute;ch mạng, xứng đ&aacute;ng với sự tin cậy của nh&acirc;n d&acirc;n.
					</p>
				</div>
			)
		},
		{
			id: 8,
			img: 'https://znews-photo.zadn.vn/w660/Uploaded/fcivbqmv/2020_01_04/Screenshot_1.jpg',
			title: 'Tài xế Grab, Be méo mặt với mức phạt lỗi đeo tai nghe mới',
			cate: 'Công nghệ',
			des: 'Theo nghị định mới, lỗi đeo tai nghe khi tham gia giao thông đã được tăng mức phạt lên nhiều lần.',
			date: '03/01/2019 18:00  ',
			status: 0,
			vip: 0,
			view: 1030,
			writer: 'Vũ Long',
			content: (
				<div>
					<p>
						Theo luật sư Trần Minh Quang, việc sử dụng tai nghe để nghe nhạc khi đang điều khiển xe
						m&aacute;y l&agrave; vi phạm ph&aacute;p luật Việt Nam. Trước đ&acirc;y, lỗi n&agrave;y vi phạm
						v&agrave;o điểm o, khoản 3, Điều 6, Nghị định 46/2016/NĐ-CP. Tuy nhi&ecirc;n, mức phạt
						h&agrave;nh ch&iacute;nh trước đ&acirc;y chỉ từ 100.000-200.000 đồng t&ugrave;y theo trường hợp.
					</p>
					<p>
						Sau ng&agrave;y 1/1, lỗi đeo tai nghe khi tham gia giao th&ocirc;ng được quy định tại điểm h,
						khoản 4, điều 6 của nghị định 100/2019/NĐ-CP. Theo đ&oacute;, người đang điều khiển xe
						m&aacute;y sử dụng &ocirc; (d&ugrave;), điện thoại di động, thiết bị &acirc;m thanh, trừ thiết
						bị trợ th&iacute;nh sẽ bị phạt tiền từ 600.000-1.000.000 đồng, t&ugrave;y trường hợp.
					</p>
					<table class="picture" align="center">
						<tbody>
							<tr>
								<td class="pic">
									<img
										src="https://znews-photo.zadn.vn/w660/Uploaded/fcivbqmv/2020_01_04/146e8b73f4cc16924fdd.jpg"
										alt="Tai xe Grab, Be 'meo mat' voi muc phat loi deo tai nghe moi hinh anh 1 146e8b73f4cc16924fdd.jpg"
									/>
								</td>
							</tr>
							<tr>
								<td class="pCaption caption">
									<p>
										Lỗi đeo tai nghe khi l&aacute;i xe đ&atilde; tăng gấp 6 lần mức phạt so với
										trước đ&acirc;y.
									</p>
								</td>
							</tr>
						</tbody>
					</table>
					<p>
						Theo luật sư Minh Quang, khi c&oacute; cuộc gọi tới, người d&ugrave;ng c&oacute; thể t&igrave;m
						chỗ an to&agrave;n, dừng lại v&agrave; nghe điện thoại. Việc sử dụng điện thoại khi đang
						l&aacute;i xe, d&ugrave; c&oacute; d&ugrave;ng tai nghe hay kh&ocirc;ng, đều khiến người
						d&ugrave;ng ph&acirc;n t&acirc;m v&agrave; dễ g&acirc;y ra tai nạn. Trong khi đ&oacute;,
						d&ugrave;ng tai nghe để nghe nhạc khi điều khiển xe m&aacute;y vừa khiến người l&aacute;i
						kh&ocirc;ng tập trung, vừa kh&ocirc;ng nghe được những g&igrave; xảy ra tr&ecirc;n đường.
					</p>
					<p>
						B&ecirc;n cạnh đ&oacute;, nghị định mới cũng đề cập việc người c&oacute; h&agrave;nh vi
						d&ugrave;ng điện thoại di động khi điều khiển xe m&aacute;y sẽ bị phạt tiền từ 1-2 triệu đồng.
					</p>
				</div>
			)
		},
		{
			id: 9,
			img: 'https://znews-photo.zadn.vn/w480/Uploaded/ivpbciv2/2020_01_03/i4.jpg',
			title: 'Dứt áo khiến đối tác bán mình, Apple giờ muốn hợp tác trở lại',
			cate: 'Công nghệ',
			des:
				'Sau 2 năm ngừng hợp tác, Apple đang xem xét lại quyết định tiếp tục hợp tác với hãng từng cung cấp chip đồ họa Imagination.',
			date: '03/01/2019 19:00  ',
			status: 0,
			vip: 0,
			view: 5000,
			writer: 'Vũ Long',
			content: (
				<div>
					<p>
						Cả 2 c&ocirc;ng ty đều đưa ra tuy&ecirc;n bố c&aacute;c thỏa thuận hợp đồng đang trong
						qu&aacute; tr&igrave;nh thương thảo v&agrave; chưa ch&iacute;nh thức x&aacute;c nhận c&aacute;c
						điều khoản.
					</p>
					<p>
						&ldquo;C&aacute;c thỏa thuận l&acirc;u d&agrave;i từng được k&yacute; kết v&agrave;o năm 2014
						m&agrave; Apple đ&atilde; hủy năm 2017 sẽ được thay thế lại bằng một số điều khoản sở hữu
						tr&iacute; tuệ kh&aacute;c&rdquo;, th&ocirc;ng c&aacute;o của Imagination cho biết.
					</p>
					<table class="picture" align="center">
						<tbody>
							<tr>
								<td class="pic">
									<img
										src="https://znews-photo.zadn.vn/w660/Uploaded/ivpbciv2/2020_01_03/1032461217.jpg"
										alt="Dut ao khien doi tac ban minh, Apple gio muon hop tac tro lai hinh anh 1 1032461217.jpg"
									/>
								</td>
							</tr>
							<tr>
								<td class="pCaption caption">
									<p>
										Imagination Technologies từng ăn n&ecirc;n l&agrave;m ra nhờ cung cấp GPU cho
										Apple, cho đến khi Apple quyết định tự l&agrave;m GPU tr&ecirc;n thế hệ iPhone
										2017. Ảnh:&nbsp;<em>Sputnik</em>
									</p>
								</td>
							</tr>
						</tbody>
					</table>
					<p>
						Theo&nbsp;<em>ZDNet,</em>&nbsp;Apple sẽ phải trả ph&iacute; sở hữu tr&iacute; tuệ cho
						Imagination mỗi khi sử dụng c&ocirc;ng nghệ của họ thay v&igrave; được cung cấp c&aacute;c đơn
						vị xử l&yacute; đồ hoạ (GPU) miễn ph&iacute; như thỏa thuận l&uacute;c trước.
					</p>
					<p>
						C&oacute; thể n&oacute;i Apple gần như l&agrave; đối t&aacute;c lớn nhất m&agrave; Imagination
						từng c&oacute;. Theo c&aacute;c th&ocirc;ng tin mới nhất, lợi nhuận của Imagination đ&atilde;
						giảm xuống 70%., thấp nhất trong v&ograve;ng 7 năm rưỡi trở lại đ&acirc;y. Điều n&agrave;y dẫn
						đến mức định gi&aacute; doanh nghiệp của h&atilde;ng đ&atilde; giảm từ 750 triệu euro xuống
						khoảng 250 triệu euro.
					</p>
					<p>
						Imagination Technologies (IT) l&agrave; c&ocirc;ng ty thiết kế chip của Anh, chuy&ecirc;n cung
						cấp bộ vi xử l&yacute; đồ họa PowerVR cho iPhone v&agrave; iPad. Tuy nhi&ecirc;n tới năm 2017,
						Apple đ&atilde; quyết định tự ph&aacute;t triển GPU cho chip A11 Bionic, sử dụng tr&ecirc;n thế
						hệ iPhone 2017.
					</p>
				</div>
			)
		},
		{
			id: 10,
			img:
				'https://znews-photo.zadn.vn/w480/Uploaded/ivpbciv2/2019_12_20/11-dieu-can-biet-khi-bi-mat-cap-iphone-2.jpg',
			title: 'Tìm lại được chiếc xe bị mất nhờ iPhone',
			cate: 'Công nghệ',
			des:
				'Một người phụ nữ ở bang Iowa, Mỹ gần đây đã may mắn tìm lại được chiếc xe nhờ vào Find My - tính năng giúp tìm iPhone, iPad, MacBook.',
			date: '04/01/2019 10:00  ',
			status: 0,
			vip: 0,
			view: 1002,
			writer: 'Minh Long',
			content: (
				<div>
					<p>
						O&rsquo;Conner đ&atilde; để qu&ecirc;n chiếc iPhone tr&ecirc;n&nbsp;xe hơi c&aacute; nh&acirc;n
						khi đang mua đồ tại một cửa h&agrave;ng tiện lợi địa phương. V&igrave; mải tập trung v&agrave;o
						việc mua sắm m&agrave; c&ocirc; c&ograve;n qu&ecirc;n r&uacute;t cả chiếc ch&igrave;a
						kh&oacute;a tr&ecirc;n xe. Kh&ocirc;ng kh&oacute; hiểu khi sau đ&oacute;, chiếc xe c&ugrave;ng
						với iPhone v&agrave; tư trang c&aacute; nh&acirc;n của O&rsquo;Conner đ&atilde; ho&agrave;n
						to&agrave;n biến mất.
					</p>
					<table class="picture" align="center">
						<tbody>
							<tr>
								<td class="pic">
									<img
										src="https://znews-photo.zadn.vn/w660/Uploaded/ivpbciv2/2019_12_20/xU44EPgXTdaC7AVLRXGD3D.jpg"
										alt="Tim duoc chiec xe bi an cap nho iPhone hinh anh 1 xU44EPgXTdaC7AVLRXGD3D.jpg"
									/>
								</td>
							</tr>
							<tr>
								<td class="pCaption caption">
									Find My - t&iacute;nh năng gi&uacute;p t&igrave;m iPhone, iPad, MacBook khi bị thất
									lạc.&nbsp;c&oacute; thể hoạt động m&agrave; kh&ocirc;ng cần tới Internet.
									Ảnh:&nbsp;Tom's Guide.
								</td>
							</tr>
						</tbody>
					</table>
					<p>
						Mọi chuyện c&agrave;ng tồi tệ hơn v&igrave; mới chỉ c&aacute;ch đ&acirc;y khoảng 3 th&aacute;ng,
						căn hộ của O&rsquo;Conner đ&atilde; ho&agrave;n to&agrave;n bị thi&ecirc;u rụi. Vụ việc
						đ&atilde; khiến O&rsquo;Conner bất đắc dĩ phải sinh hoạt v&agrave; ăn ngủ tr&ecirc;n chiếc xe
						của m&igrave;nh trong v&agrave;i tuần gần đ&acirc;y.
					</p>
					<p>
						May mắn thay, nhờ v&agrave;o t&iacute;nh năng t&igrave;m kiếm vị tr&iacute; của chiếc iPhone vẫn
						đang bật, ch&iacute;nh quyền địa phương đ&atilde; t&igrave;m được chiếc xe của O&rsquo;Conner
						tại một khu chung cư. Tuy nhi&ecirc;n, c&ocirc; vẫn chưa lấy lại được iPhone, v&iacute;
						v&agrave; c&aacute;c vật dụng tư trang kh&aacute;c.
					</p>
				</div>
			)
		},

		{
			id: 11,
			img: 'https://znews-photo.zadn.vn/w480/Uploaded/neg_wpeczyr/2019_12_20/maxresdefault.jpg',
			title: 'Mua Apple Watch nào rẻ nhất dùng được eSIM tại Việt Nam?',
			cate: 'Công nghệ',
			des: 'Những mẫu Apple Watch Series 3 (bản GPS + Cellular) trở lên mới có thể dùng được eSIM tại Việt Nam.',
			date: '04/01/2019 14:00  ',
			status: 0,
			vip: 0,
			view: 1060,
			writer: 'Minh Long',
			content: (
				<div>
					<p>
						Ng&agrave;y 13/12, Viettel ra mắt dịch vụ eSIM tr&ecirc;n đồng hồ th&ocirc;ng minh
						Apple&nbsp;Watch, cho ph&eacute;p thiết bị c&oacute; thể kết nối mạng di động tại Việt Nam.
					</p>
					<p>
						Như vậy người d&ugrave;ng c&oacute; thể kết nối trực tiếp với mạng viễn th&ocirc;ng
						từ&nbsp;thiết bị m&agrave; kh&ocirc;ng cần qua Bluetooth tr&ecirc;n&nbsp;<a
							class="topic company autolink"
							title="Tin tức iPhone"
							href="https://news.zing.vn/tieu-diem/iphone.html"
						>
							iPhone
						</a>&nbsp;như trước. Điều đ&oacute; đồng nghĩa với việc bạn c&oacute; thể nhận được c&aacute;c
						cuộc gọi, sử dụng bản đồ ngay tr&ecirc;n&nbsp;<a
							class="topic company autolink"
							title="Tin tức Apple"
							href="https://news.zing.vn/tieu-diem/cong-ty-apple.html"
						>
							Apple
						</a>&nbsp;Watch m&agrave; kh&ocirc;ng cần đến iPhone.
					</p>
					<p>
						Để c&oacute; thể sử dụng được eSIM, thiết bị của người d&ugrave;ng cần đảm bảo một số điều kiện
						như Apple Watch Series 3 hoặc hơn (bản GPS + Cellular), chạy tr&ecirc;n nền tảng watchOS
						phi&ecirc;n bản 6.1.1 trở l&ecirc;n. Apple Watch phải hỗ trợ một trong số c&aacute;c băng tần
						mạng 900 MHz, 1.800 MHz, 2.100 MHz, 2.600 MHz.
					</p>
					<table class="picture" align="center">
						<tbody>
							<tr>
								<td class="pic">
									<img
										src="https://znews-photo.zadn.vn/w660/Uploaded/neg_wpeczyr/2019_12_20/The-Top-5-Apple-Watch-Apps-at-Work-1024x538.jpg"
										alt="Mua Apple Watch nao re nhat dung duoc eSIM tai Viet Nam? hinh anh 1 The-Top-5-Apple-Watch-Apps-at-Work-1024x538.jpg"
									/>
								</td>
							</tr>
							<tr>
								<td class="pCaption caption">
									<p>
										Viettel đ&atilde; hỗ trợ eSIM tr&ecirc;n Apple Watch. Ảnh:<em>&nbsp;Digital Trends</em>.
									</p>
								</td>
							</tr>
						</tbody>
					</table>
					<p>
						Hiện tại, nếu bạn&nbsp;muốn mua Apple Watch d&ugrave;ng được t&iacute;nh năng eSIM c&oacute; thể
						tham khảo một số lựa chọn sau đ&acirc;y. Đầu ti&ecirc;n, với những sản phẩm ch&iacute;nh
						h&atilde;ng, Apple Watch Series 3 LTE đang được ch&agrave;o b&aacute;n với gi&aacute; từ 8,5
						triệu đồng, Apple Watch Series 4 LTE gi&aacute; từ 9,9 triệu đồng v&agrave; Apple Watch Series 5
						LTE 14 triệu đồng.
					</p>
					<p>
						Apple Watch d&ugrave;ng được eSIM tại Việt Nam l&agrave; phi&ecirc;n bản quốc tế. Tuy
						nhi&ecirc;n, nh&agrave; mạng Viettel kh&ocirc;ng hỗ trợ c&aacute;c model x&aacute;ch tay từ Mỹ,
						Canada. Thế n&ecirc;n người d&ugrave;ng c&oacute; thể chọn mua những sản phẩm x&aacute;ch tay từ
						Singapore, Nhật Bản, Hong Kong.
					</p>
				</div>
			)
		},
		{
			id: 12,
			img: 'https://znews-photo.zadn.vn/w480/Uploaded/pgi_qvradhnat/2020_01_05/ny.jpg',
			title: 'Gọi điện nhờ trợ giúp khi bị phạt 35 triệu đồng vì lỗi nồng độ cồn',
			cate: 'Thời sự',
			des:
				'Tài xế T. không chịu ký vào biên bản xử lý với lý do "sức khỏe không tốt". Đồng thời, tài xế này còn gọi điện nhờ người trợ giúp.',
			date: '05/01/2019 10:00 ',
			status: 0,
			vip: 0,
			view: 5860,
			writer: 'Minh Long',
			content: (
				<div>
					<p>
						Đội CSGT - Trật tự đ&ocirc; thị, C&ocirc;ng an TP Huế (Thừa Thi&ecirc;n - Huế) cho biết tối 4/1
						đơn vị đ&atilde; xử phạt một trường hợp t&agrave;i xế &ocirc;t&ocirc; vi phạm vượt mức cao nhất
						trong khung xử phạt về nồng độ cồn theo quy định mới tại Nghị định 100/2019.
					</p>
					<table class="picture" align="center">
						<tbody>
							<tr>
								<td class="pic">
									<img
										src="https://znews-photo.zadn.vn/w660/Uploaded/pgi_qvradhnat/2020_01_05/bt.jpg"
										alt="Goi dien nho tro giup khi bi phat 35 trieu dong vi loi nong do con hinh anh 1 bt.jpg"
									/>
								</td>
							</tr>
							<tr>
								<td class="pCaption caption">
									<p>
										T&agrave;i xế bị xử phạt nồng độ cồn. Ảnh:&nbsp;<em>L.C.</em>
									</p>
								</td>
							</tr>
						</tbody>
					</table>
					<p>
						Theo đ&oacute;, khoảng 19h30 c&ugrave;ng ng&agrave;y, t&agrave;i xế l&agrave; T.T.B.T (29 tuổi,
						tr&uacute; ở TP Đ&ocirc;ng H&agrave; (Quảng Trị) điều khiển &ocirc;t&ocirc; lưu th&ocirc;ng
						tr&ecirc;n đường Đống Đa (TP Huế). L&uacute;c n&agrave;y, lực lượng CSGT ph&aacute;t hiện
						t&agrave;i xế c&oacute; nghi vấn n&ecirc;n y&ecirc;u cầu dừng xe kiểm tra.
					</p>
					<p>
						Thời điểm kiểm tra, t&agrave;i xế T. c&oacute; nồng độ cồn l&ecirc;n tới 0,661mg/l&iacute;t
						kh&iacute; thở, vượt mức cao nhất trong khung xử phạt về vi phạm nồng độ cồn.
					</p>
					<p>
						Theo quy định của Nghị định 100/2019, CSGT đ&atilde; lập bi&ecirc;n bản để xử phạt h&agrave;nh
						vi vi phạm của t&agrave;i xế T. với số tiền 35 triệu đồng. Đồng thời, t&agrave;i xế n&agrave;y
						c&ograve;n bị tước quyền sử dụng giấy ph&eacute;p l&aacute;i xe 23 th&aacute;ng.
					</p>
				</div>
			)
		},
		{
			id: 13,
			img:
				'https://znews-photo.zadn.vn/w480/Uploaded/lce_mdlwc/2020_01_05/82022432_672026653605810_2048651283673382912_n.jpg',
			title: '34 nam nữ phê ma túy trong quán karaoke Victory',
			cate: 'Thời sự',
			des:
				'Cảnh sát kiểm tra quán karaoke Victory ở huyện Thăng Bình (Quảng Nam) và phát hiện hàng chục nam nữ đang phê ma túy.',
			date: '05/01/2019 14:00 ',
			status: 0,
			vip: 0,
			view: 1060,
			writer: 'Minh Long',
			content: (
				<div>
					<p>
						Rạng s&aacute;ng 5/1, C&ocirc;ng an huyện Thăng B&igrave;nh (<a
							class="topic location autolink quickview"
							href="https://news.zing.vn/tieu-diem/quang-nam.html"
						>
							Quảng Nam
						</a>) kiểm tra h&agrave;nh ch&iacute;nh qu&aacute;n karaoke Victory (x&atilde; B&igrave;nh Minh,
						huyện Thăng B&igrave;nh).
					</p>
					<table class="picture" align="center">
						<tbody>
							<tr>
								<td class="pic">
									<img
										src="https://znews-photo.zadn.vn/w660/Uploaded/lce_mdlwc/2020_01_05/matuytb.jpg"
										alt="34 nam nu phe ma tuy trong quan karaoke Victory hinh anh 1 matuytb.jpg"
									/>
								</td>
							</tr>
							<tr>
								<td class="pCaption caption">
									<p>
										Tại 6 ph&ograve;ng h&aacute;t ở karaoke Victory, cảnh s&aacute;t ph&aacute;t
										hiện 34 nam nữ dương t&iacute;nh ma t&uacute;y. Ảnh:&nbsp;<em>C&ocirc;ng an cung cấp.</em>
									</p>
								</td>
							</tr>
						</tbody>
					</table>
					<p>
						Khi cảnh s&aacute;t kiểm tra, 6 ph&ograve;ng h&aacute;t c&oacute; 34 nam nữ đang nhảy
						m&uacute;a. Kiểm tra nhanh, c&ocirc;ng an ph&aacute;t hiện to&agrave;n bộ kh&aacute;ch dương
						t&iacute;nh với ma t&uacute;y, trong đ&oacute; c&oacute; 6 nữ, 28 nam.
					</p>
					<p>
						Tại c&aacute;c ph&ograve;ng h&aacute;t, cảnh s&aacute;t thu giữ nhiều dụng cụ sử dụng ma
						t&uacute;y. C&ocirc;ng an huyện Thăng B&igrave;nh đ&atilde; lập bi&ecirc;n bản vi phạm
						h&agrave;nh ch&iacute;nh đối với chủ qu&aacute;n karaoke Victory.
					</p>
					<p>
						Vụ việc đang được C&ocirc;ng an huyện Thăng B&igrave;nh tiếp tục điều tra, l&agrave;m r&otilde;.
					</p>
				</div>
			)
		},
		{
			id: 14,
			img: 'https://znews-photo.zadn.vn/w480/Uploaded/pgi_qvradhnat/2020_01_05/ghb.jpg',
			title: 'Thiền sư Thích Nhất Hạnh về Huế tịnh dưỡng sau hơn 1 tháng ở Thái Lan',
			cate: 'Thời sự',
			des:
				'Từ Thái Lan trở về Huế tịnh dưỡng, sức khỏe của Thiền sư Thích Nhất Hạnh khá tốt. Theo ý nguyện của thiền sư, ông muốn sống tại chùa Từ Hiếu.',
			date: '05/01/2019 16:00 ',
			status: 0,
			vip: 0,
			view: 1056,
			writer: 'Vũ Long',
			content: (
				<div>
					<p>
						Sau hơn 1 th&aacute;ng ở L&agrave;ng Mai (Th&aacute;i Lan), thiền sư&nbsp;<a
							class="topic person autolink quickview"
							href="https://news.zing.vn/tieu-diem/thich-nhat-hanh.html"
						>
							Th&iacute;ch Nhất Hạnh
						</a>&nbsp;đ&atilde; quay trở về ch&ugrave;a Từ Hiếu v&agrave;o ng&agrave;y 4/1 (TP Huế, Thừa
						Thi&ecirc;n - Huế) để tịnh dưỡng. Đ&acirc;y l&agrave; ng&ocirc;i ch&ugrave;a m&agrave; thiền sư
						tu tập từ năm 16 tuổi.
					</p>
					<p>
						Biết tin thiền sư trở về Huế, h&agrave;ng chục tăng ni phật tử đ&atilde; đến s&acirc;n bay
						Ph&uacute; B&agrave;i để nghinh đ&oacute;n.
					</p>
					<table class="picture" align="center">
						<tbody>
							<tr>
								<td class="pic">
									<img
										src="https://znews-photo.zadn.vn/w660/Uploaded/pgi_qvradhnat/2020_01_05/hy.jpg"
										alt="Thien su Thich Nhat Hanh ve Hue tinh duong sau hon 1 thang o Thai Lan hinh anh 1 hy.jpg"
									/>
								</td>
							</tr>
							<tr>
								<td class="pCaption caption">
									<p>
										Thiền sư Th&iacute;ch Nhất Hạnh. Ảnh:&nbsp;<em>V.T.</em>
									</p>
								</td>
							</tr>
						</tbody>
					</table>
					<p>
						Tại ch&ugrave;a Từ Hiếu, thiền sư Th&iacute;ch Nhất Hạnh sẽ tịnh dưỡng ở thất Lắng Nghe.
						Đ&acirc;y l&agrave; nơi m&agrave; thiền sư tịnh dưỡng hơn 1 năm qua.
					</p>
					<p>
						Thiền sư Th&iacute;ch Nhất Hạnh từ Th&aacute;i Lan về ch&ugrave;a Từ Hiếu (Thừa Thi&ecirc;n -
						Huế) từ cuối th&aacute;ng 10/2018. Theo &yacute; nguyện của thiền sư, &ocirc;ng muốn sống tại
						ch&ugrave;a Từ Hiếu cho đến ng&agrave;y vi&ecirc;n tịch.
					</p>
					<p>
						Thiền sư Th&iacute;ch Nhất Hạnh sinh năm 1926 tại Thừa Thi&ecirc;n - Huế, l&agrave; nh&agrave;
						sư, nh&agrave; văn, nh&agrave; thơ, nh&agrave; hoạt động x&atilde; hội nổi tiếng của Phật
						gi&aacute;o.
					</p>
					<p>
						Ng&agrave;y 1/5/1966 tại ch&ugrave;a Từ Hiếu, thiền sư Ch&acirc;n Thật trao ấn khả cho
						Th&iacute;ch Nhất Hạnh để từ đ&acirc;y ng&agrave;i trở th&agrave;nh một thiền sư (thầy dạy về
						thiền).
					</p>
				</div>
			)
		},
		{
			id: 15,
			img: 'https://znews-photo.zadn.vn/w480/Uploaded/mdf_drokxr/2020_01_05/vanhau_thumb.jpg',
			title: 'Báo Indonesia: Văn Hậu sẽ gặp nhiều khó khăn ở châu Âu',
			cate: 'Thể thao',
			des:
				'Truyền thông Indonesia khẳng định những hậu vệ cánh Đông Nam Á sẽ gặp nhiều khó khăn để có vị trí chính thức ở các đội bóng châu Âu.',
			date: '05/01/2019 16:30 ',
			status: 0,
			vip: 1,
			view: 6056,
			writer: 'Vũ Lương',
			content: (
				<div>
					<p>
						<em>Indosport</em>&nbsp;đăng b&agrave;i viết c&oacute; ti&ecirc;u đề "Hậu vệ tr&aacute;i của
						Đ&ocirc;ng Nam &Aacute; chưa bao giờ th&agrave;nh c&ocirc;ng tại ch&acirc;u &Acirc;u".
					</p>
					<p>
						B&agrave;i b&aacute;o dẫn lại quan điểm của truyền th&ocirc;ng H&agrave; Lan n&oacute;i rằng ưu
						ti&ecirc;n h&agrave;ng đầu cho vị tr&iacute; hậu vệ tr&aacute;i ở Heerenveen l&agrave; Sherel
						Floranus v&agrave; Lucas Woudenberg. Trong đ&oacute;, khả năng cạnh tranh cho vị tr&iacute;
						ch&iacute;nh thức của&nbsp;<a
							class="topic person autolink quickview"
							href="https://news.zing.vn/tieu-diem/doan-van-hau.html"
						>
							Đo&agrave;n Văn Hậu
						</a>&nbsp;tại Heerenveen l&agrave; rất kh&oacute; khăn.
					</p>
					<table class="picture" align="center">
						<tbody>
							<tr>
								<td class="pic">
									<img
										src="https://znews-photo.zadn.vn/w660/Uploaded/mdf_drokxr/2020_01_05/van_hau.jpg"
										alt="Bao Indonesia: 'Van Hau se gap nhieu kho khan o chau Au' hinh anh 1 van_hau.jpg"
									/>
								</td>
							</tr>
							<tr>
								<td class="pCaption caption">
									<p>
										Văn Hậu c&oacute; lần ra s&acirc;n cho đội một của Heerenveen. Ảnh:&nbsp;<em>Orange Pictures</em>.
									</p>
								</td>
							</tr>
						</tbody>
					</table>
					<p>
						<em>Indosport&nbsp;</em>viết: "Văn Hậu c&oacute; thể trở lại CLB H&agrave; Nội v&agrave;o cuối
						m&ugrave;a giải, bởi cậu ấy chỉ tới H&agrave; Lan theo dạng cho mượn. Nếu nhanh ch&oacute;ng
						th&iacute;ch nghi ở nửa sau của m&ugrave;a giải, Văn Hậu c&oacute; thể sẽ được Heerenveen mua
						đứt. Nếu nh&igrave;n v&agrave;o những g&igrave; c&aacute;c nh&agrave; b&aacute;o v&agrave; HLV
						H&agrave; Lan đ&aacute;nh gi&aacute;, r&otilde; r&agrave;ng cậu ấy gặp kh&oacute; khăn trong
						việc gi&agrave;nh vị tr&iacute; ch&iacute;nh thức. Văn Hậu gặp nhiều kh&oacute; khăn ở
						ch&acirc;u &Acirc;u".
					</p>
					<p>
						Trước Văn Hậu, Firza Andika, hậu vệ tr&aacute;i người Indonesia, cũng từng chuyển đến ch&acirc;u
						&Acirc;u thi đấu cho AFC Tubize ở Bỉ. Firza gia nhập AFC Tubize v&agrave;o th&aacute;ng 1/2019,
						nhưng kh&ocirc;ng thể cạnh tranh cho một vị tr&iacute; ch&iacute;nh thức. Cầu thủ n&agrave;y
						phải trở về qu&ecirc; hương thi đấu cho PSM Makassar v&agrave;o th&aacute;ng 8/2019 theo dạng
						cho mượn.
					</p>
				</div>
			)
		},
		{
			id: 16,
			img: 'https://znews-photo.zadn.vn/w1024/Uploaded/mdf_usoddd/2019_12_31/bia.jpg',
			title: 'Tuyển UAE từng dự World Cup như thế nào?',
			cate: 'Thể thao',
			des:
				'Hành trình đến World Cup 1990 của UAE có thể xem như câu chuyện cổ tích trong bóng đá và là niềm cảm hứng cho những đội bóng nhỏ.',
			date: '05/01/2019 17:30 ',
			status: 0,
			vip: 1,
			view: 3056,
			writer: 'Vũ Lương',
			content: (
				<div>
					<p>
						Tại chiến dịch v&ograve;ng loại, UAE được dẫn dắt bởi HLV Zagallo. &Ocirc;ng từng 2 lần
						c&ugrave;ng đội tuyển Brazil v&ocirc; địch World Cup tr&ecirc;n tư c&aacute;ch cầu thủ v&agrave;
						một lần dẫn dắt đội b&oacute;ng xứ Samba l&ecirc;n ng&ocirc;i tại đấu trường n&agrave;y. Với
						kinh nghiệm của m&igrave;nh, &ocirc;ng nhanh ch&oacute;ng gi&uacute;p UAE, được tập hợp bởi
						nhiều cầu thủ nghiệp dư, vượt qua v&ograve;ng loại đầu ti&ecirc;n với những đối thủ l&agrave;
						Kuwait v&agrave; Pakistan.
					</p>
					<table class="picture" align="center">
						<tbody>
							<tr>
								<td class="pic">
									<img
										src="https://znews-photo.zadn.vn/w1024/Uploaded/mdf_usoddd/2019_12_31/UAE_1990.jpeg"
										alt="Tuyen UAE tung du World Cup nhu the nao? hinh anh 1 UAE_1990.jpeg"
									/>
								</td>
							</tr>
							<tr>
								<td class="pCaption caption default-caption">
									<p>
										Với nhiều cầu thủ nghiệp dư trong đội h&igrave;nh, UAE c&oacute; lần đầu dự
										World Cup.
									</p>
								</td>
							</tr>
						</tbody>
					</table>
					<p>
						UAE tiến v&agrave;o v&ograve;ng loại cuối c&ugrave;ng, nơi họ c&ugrave;ng 5 đội đầu bảng
						kh&aacute;c tranh 2 tấm v&eacute; tới World Cup. Lần n&agrave;y, đối thủ của UAE l&agrave; những
						đội b&oacute;ng h&agrave;ng đầu ch&acirc;u lục gồm H&agrave;n Quốc, Trung Quốc, Saudi Arabia,
						CHDCND Triều Ti&ecirc;n v&agrave; Qatar. Với đội b&oacute;ng c&oacute; nhiều cầu thủ nghiệp dư,
						tới được World Cup gần như l&agrave; c&acirc;u chuyện cổ t&iacute;ch với họ.
					</p>
					<p>
						V&ograve;ng loại n&oacute;i tr&ecirc;n được tổ chức ở nước trung lập với thể thức v&ograve;ng
						tr&ograve;n một lượt v&agrave; 2 điểm được t&iacute;nh cho một trận thắng. Trận ra qu&acirc;n,
						UAE h&ograve;a CHDCND Triều Ti&ecirc;n 0-0. Trận kế tiếp gặp &ocirc;ng lớn Trung Quốc, UAE sớm
						bị dẫn trước sau pha lập c&ocirc;ng của Tang Yaodong. Khi thất bại đến rất gần với UAE, họ
						t&igrave;m được b&agrave;n gỡ ph&uacute;t 87 với b&agrave;n thắng của Khaleel Mubarak.
						V&agrave;i ph&uacute;t sau, Al Talyani h&oacute;a người h&ugrave;ng với b&agrave;n thắng quyết
						định mang về chiến thắng cho UAE.
					</p>
					<p>
						Hai trận h&ograve;a tiếp theo của UAE với Saudi Arabia v&agrave; Qatar đưa UAE v&agrave;o
						t&igrave;nh thế thuận lợi khi chỉ trận h&ograve;a trước H&agrave;n Quốc ở lượt đấu cuối cũng đủ
						để gi&uacute;p họ đi tiếp. Tuy nhi&ecirc;n, H&agrave;n Quốc l&agrave; đội b&oacute;ng c&oacute;
						đẳng cấp kh&aacute;c biệt ho&agrave;n to&agrave;n với những đội c&ograve;n lại. Họ đ&atilde; sớm
						c&oacute; v&eacute; tới World Cup sau 3 trận thắng, một trận h&ograve;a, ghi 4 b&agrave;n
						v&agrave; chưa để thủng lưới. C&oacute; điểm trước H&agrave;n Quốc c&oacute; vẻ l&agrave; nhiệm
						vụ qu&aacute; sức với UAE.
					</p>
					<p>
						UAE nhanh ch&oacute;ng bị cường địch dẫn trước ở ph&uacute;t thứ 8 sau pha lập c&ocirc;ng của
						Kwan Hwang-bo. Sau khi để dẫn b&agrave;n, UAE đ&atilde; thể hiện tinh thần chiến đấu ngoan cường
						v&agrave; c&oacute; b&agrave;n gỡ ph&uacute;t 16, do c&ocirc;ng của Al Talyani. Những
						ph&uacute;t sau đ&oacute;, UAE chơi ngoan cường để bảo vệ kết quả n&agrave;y, để rồi kh&eacute;p
						lại trận đấu với tỷ số h&ograve;a 1-1.
					</p>
					<table class="picture" align="center">
						<tbody>
							<tr>
								<td class="pic">
									<img
										src="https://znews-photo.zadn.vn/w1024/Uploaded/mdf_usoddd/2019_12_31/lor_18_8289678.jpg"
										alt="Tuyen UAE tung du World Cup nhu the nao? hinh anh 2 lor_18_8289678.jpg"
									/>
								</td>
							</tr>
							<tr>
								<td class="pCaption caption default-caption">
									<p>
										Được đ&aacute;nh gi&aacute; thấp, nhưng UAE vẫn vượt qua v&ograve;ng loại World
										Cup 1990 đầy cảm x&uacute;c.
									</p>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			)
		},
		{
			id: 17,
			img: 'https://znews-photo.zadn.vn/w480/Uploaded/natmzz/2020_01_05/w.jpg',
			title: 'MU, Wolves phải đá lại vòng 3 FA Cup',
			cate: 'Thể thao',
			des:
				'MU chơi bế tắc và chấp nhận kết quả hòa 0-0 trước chủ nhà Wolves ở vòng 3 FA Cup diễn ra rạng sáng 5/1 (giờ Hà Nội).',
			date: '05/01/2019 18:30 ',
			status: 0,
			vip: 0,
			view: 3059,
			writer: 'Vũ Bùi',
			content: (
				<div>
					<p>
						Trước đối thủ nổi tiếng l&agrave; "s&aacute;t thủ của c&aacute;c &ocirc;ng lớn", Man Utd buộc
						phải nhập cuộc thận trọng. Như thường lệ, Wolverhampton triển khai lối đ&aacute; ph&ograve;ng
						ngự số đ&ocirc;ng ở s&acirc;n nh&agrave; để chờ cơ hội phản c&ocirc;ng.
					</p>
					<p>
						Cơ hội sớm đến với chủ nh&agrave; ở ph&uacute;t thứ 13 v&agrave; nếu kh&ocirc;ng c&oacute; sự
						xuất sắc của Sergio Romero, MU đ&atilde; phải nhận b&agrave;n thua.
					</p>
					<p>
						Với h&agrave;ng c&ocirc;ng gồm to&agrave;n cầu thủ trẻ, thể h&igrave;nh "mỏng cơm" như Mason
						Greenwood, Daniel James v&agrave; Tahith Chong, Man Utd kh&ocirc;ng thể tạo ra sự kh&aacute;c
						biệt trước số đ&ocirc;ng cầu thủ Wolves &aacute;n ngữ trước khung th&agrave;nh.
					</p>
					<p>
						"Quỷ đỏ" dồn b&oacute;ng ra hai bi&ecirc;n, thực hiện những c&uacute; s&uacute;t xa nhưng đều
						kh&ocirc;ng mang lại hiệu quả. Hiệp đấu đầu ti&ecirc;n tr&ocirc;i qua m&agrave; kh&ocirc;ng
						c&oacute; b&agrave;n thắng n&agrave;o được ghi.
					</p>
					<table class="picture" align="center">
						<tbody>
							<tr>
								<td class="pic">
									<img
										src="https://znews-photo.zadn.vn/w660/Uploaded/natmzz/2020_01_05/2020_01_04T180643Z_1822942473_RC269E9V075Z_RTRMADP_3_SOCCER_ENGLAND_WLV_MUN_REPORT.JPG"
										alt="MU, Wolves phai da lai vong 3 FA Cup hinh anh 1 2020_01_04T180643Z_1822942473_RC269E9V075Z_RTRMADP_3_SOCCER_ENGLAND_WLV_MUN_REPORT.JPG"
									/>
								</td>
							</tr>
							<tr>
								<td class="pCaption caption">
									<p>2 đội thi đấu ngang ngửa tại Molineux.</p>
								</td>
							</tr>
						</tbody>
					</table>
					<p>
						Thế trận kh&ocirc;ng c&oacute; nhiều thay đổi trong hiệp hai. Wolves vẫn ph&ograve;ng ngự chủ
						động v&agrave; nhiều lần uy hiếp khung th&agrave;nh của MU bằng những t&igrave;nh huống phản
						c&ocirc;ng hay đột ph&aacute; c&aacute; nh&acirc;n.
					</p>
					<p>
						Ph&uacute;t 70, HLV&nbsp;<a
							class="topic person autolink quickview"
							href="https://news.zing.vn/tieu-diem/solskjaer.html"
						>
							Solskjaer
						</a>&nbsp;tung Rashford v&agrave;o s&acirc;n. Ch&acirc;n s&uacute;t số 10 su&yacute;t
						ch&uacute;t nữa đ&atilde; c&oacute; thể ghi b&agrave;n mở tỷ số. Tuy nhi&ecirc;n c&uacute;
						s&uacute;t của anh lại đưa b&oacute;ng đi dội x&agrave;.
					</p>
				</div>
			)
		},
		{
			id: 18,
			img: 'https://znews-photo.zadn.vn/w480/Uploaded/natmzz/2019_12_31/13_thumb.jpg',
			title: 'Đội hình hay nhất thập kỷ qua gây tranh cãi',
			cate: 'Thể thao',
			des: 'Đội hình hay nhất thập niên thứ 2 của thế kỷ 21 do tạp chí France Football bình chọn.',
			date: '05/01/2019 20:00 ',
			status: 0,
			vip: 1,
			view: 6000,
			writer: 'Vũ Lương',
			content: (
				<div>
					<header class="the-article-header">
						<p class="the-article-category">
							Van Dijk mới chỉ tỏa s&aacute;ng trong hơn 2 m&ugrave;a giải gần đ&acirc;y nhưng vẫn
							g&oacute;p mặt đội h&igrave;nh hay nhất thập ni&ecirc;n thứ 2 của thế kỷ 21 do tạp
							ch&iacute; France Football b&igrave;nh chọn.
						</p>
					</header>
					<section class="main">
						<div class="the-article-body">
							<table class="picture nocaption" align="center">
								<tbody>
									<tr>
										<td class="pic">
											<img
												src="https://znews-photo.zadn.vn/w1024/Uploaded/natmzz/2019_12_31/12_squad.jpg"
												alt="Doi hinh hay nhat thap ky qua gay tranh cai hinh anh 1 12_squad.jpg"
												style={{ width: '100%' }}
											/>
										</td>
									</tr>
								</tbody>
							</table>
							<table class="picture" align="center">
								<tbody>
									<tr>
										<td class="pic">
											<img
												style={{ width: '100%' }}
												src="https://znews-photo.zadn.vn/w1024/Uploaded/natmzz/2019_12_31/01_casillas_zing.jpg"
												alt="Doi hinh hay nhat thap ky qua gay tranh cai hinh anh 2 01_casillas_zing.jpg"
											/>
										</td>
									</tr>
									<tr>
										<td class="pCaption caption">
											Sau th&agrave;nh c&ocirc;ng vang dội c&ugrave;ng Real, "Th&aacute;nh Iker"
											chia tay s&acirc;n Bernabeu để đến với Porto.&nbsp;Casillas được ph&aacute;t
											hiện mắc bệnh tim nhưng anh vẫn chưa chịu giải nghệ.&nbsp;Anh vẫn ki&ecirc;n
											tr&igrave; tập luyện với hy vọng c&oacute; thể trở lại s&acirc;n cỏ trong
											thời gian sớm nhất.
										</td>
									</tr>
								</tbody>
							</table>
							<table class="picture" align="center">
								<tbody>
									<tr>
										<td class="pic">
											<img
												src="https://znews-photo.zadn.vn/w1024/Uploaded/natmzz/2019_12_31/02_lahm_zing.jpg"
												alt="Doi hinh hay nhat thap ky qua gay tranh cai hinh anh 3 02_lahm_zing.jpg"
												style={{ width: '100%' }}
											/>
										</td>
									</tr>
									<tr>
										<td class="pCaption caption">
											Người đội trưởng mẫu mực gi&uacute;p&nbsp;<a
												class="topic company autolink"
												title="Tin tức Bayern Munich"
												href="https://news.zing.vn/tieu-diem/bayern-munich.html"
											>
												Bayern Munich
											</a>&nbsp;chinh phục h&agrave;ng loạt danh hiệu lớn, đưa tuyển Đức l&ecirc;n
											đỉnh thế giới đ&atilde; giải nghệ v&agrave;o năm 2017 khiến người h&acirc;m
											mộ kh&ocirc;ng khỏi tiếc nuối.
										</td>
									</tr>
								</tbody>
							</table>
							<table class="picture" align="center">
								<tbody>
									<tr>
										<td class="pic">
											<img
												src="https://znews-photo.zadn.vn/w1024/Uploaded/natmzz/2019_12_31/03_van_dijk_zing.jpg"
												alt="Doi hinh hay nhat thap ky qua gay tranh cai hinh anh 4 03_van_dijk_zing.jpg"
												style={{ width: '100%' }}
											/>
										</td>
									</tr>
									<tr>
										<td class="pCaption caption">
											Chỉ cần gần 2 năm kho&aacute;c &aacute;o Liverpool, Van Dijk đ&atilde; vươn
											m&igrave;nh từ một cầu thủ tiềm năng th&agrave;nh đối thủ th&aacute;ch thức
											danh hiệu Quả b&oacute;ng V&agrave;ng với Ronaldo, Messi. M&agrave;n
											tr&igrave;nh diễn trong 2 năm vừa qua tại Anfield l&agrave; đủ để trung vệ
											người H&agrave; Lan c&oacute; vị tr&iacute; trong đội h&igrave;nh hay nhất
											thập kỷ do France Football b&igrave;nh chọn.
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</section>
				</div>
			)
		},
		{
			id: 19,
			img: 'https://znews-photo.zadn.vn/w1024/Uploaded/pwivovlb/2020_01_04/pv_vu.jpg',
			title: 'Phan Văn Anh Vũ khai ý đồ lập 5 công ty để thâu tóm đất ở Đà Nẵng',
			cate: 'Pháp luật',
			des:
				'Bị cáo Vũ khai việc thành lập càng nhiều doanh nghiệp thì càng có lợi trong đầu tư các dự án và được vay vốn ngân hàng nhiều.',
			date: '06/01/2019 08:00  ',
			status: 0,
			vip: 1,
			view: 6800,
			writer: 'Vũ Lương',
			content: (
				<div>
					<p>
						S&aacute;ng 5/1, phi&ecirc;n t&ograve;a x&eacute;t xử 2 cựu Chủ tịch&nbsp;<a
							class="topic location autolink"
							title="Tin tức Đ&agrave; Nẵng"
							href="https://news.zing.vn/tieu-diem/da-nang.html"
						>
							Đ&agrave; Nẵng
						</a>&nbsp;v&agrave; c&aacute;c bị c&aacute;o li&ecirc;n quan vụ giao, chuyển nhượng đất đai
						tr&aacute;i quy định cho&nbsp;<a
							class="topic person autolink"
							title="Tin tức Phan Văn Anh Vũ"
							href="https://news.zing.vn/tieu-diem/phan-van-anh-vu.html"
						>
							Phan Văn Anh Vũ
						</a>&nbsp;sang ng&agrave;y l&agrave;m việc thứ 4.
					</p>
					<p>
						Luật sư Nguyễn Hữu Thế Trạch (b&agrave;o chữa cho bị c&aacute;o Phan Văn Anh Vũ) hỏi th&acirc;n
						chủ về việc nhận chuyển nhượng nh&agrave; đất c&ocirc;ng sản v&agrave; dự &aacute;n bất động sản
						ở TP Đ&agrave; Nẵng. Trong đ&oacute; c&oacute; dự &aacute;n 29 ha thuộc Khu đ&ocirc; thị mới
						quốc tế Đa Phước.
					</p>
					<p>
						Theo hồ sơ vụ &aacute;n, năm 2006, C&ocirc;ng ty TNHH Deawon (H&agrave;n Quốc) được UBND
						Đ&agrave; Nẵng cho ph&eacute;p đầu tư v&agrave;o dự &aacute;n 29 ha tr&ecirc;n nguy&ecirc;n tắc
						li&ecirc;n doanh với một c&ocirc;ng ty Việt Nam để tiến h&agrave;nh khai th&aacute;c. Sau
						đ&oacute;, &ocirc;ng Trần Văn Minh (nguy&ecirc;n Chủ tịch TP Đ&agrave; Nẵng) chấp thuận để
						C&ocirc;ng ty Daewon đầu tư v&agrave;o Khu đ&ocirc; thị mới Đa Phước theo hướng giao khu đất
						x&acirc;y dựng nh&agrave; biệt thự, liền kề cho Phan Văn Anh Vũ để li&ecirc;n doanh với
						C&ocirc;ng ty Daewon thực hiện dự &aacute;n.
					</p>
					<table class="picture" align="center">
						<tbody>
							<tr>
								<td class="pic">
									<img
										src="https://znews-photo.zadn.vn/w1024/Uploaded/pwivovlb/2020_01_04/pv_vu.jpg"
										alt="Phan Van Anh Vu khai y do lap 5 cong ty de thau tom dat o Da Nang hinh anh 1 pv_vu.jpg"
									/>
								</td>
							</tr>
							<tr>
								<td class="pCaption caption">
									<p>
										Phan Văn Anh Vũ bị truy tố 2 tội danh. Ảnh:&nbsp;<em>TTXVN.</em>
									</p>
								</td>
							</tr>
						</tbody>
					</table>
					<p>
						"Bằng c&aacute;ch n&agrave;o &ocirc;ng nhận được dự &aacute;n 29 ha n&agrave;y?", luật sư hỏi.
						Vũ khai C&ocirc;ng ty cổ phần X&acirc;y dựng 79 (do bị c&aacute;o l&agrave;m Chủ tịch HĐQT) nhận
						được dự &aacute;n 29 ha sau khi đối t&aacute;c l&agrave; C&ocirc;ng ty Deawon gửi văn bản cho
						UBND Đ&agrave; Nẵng đề nghị cho li&ecirc;n doanh với doanh nghiệp của bị c&aacute;o.
					</p>
				</div>
			)
		},
		{
			id: 20,
			img: 'https://znews-photo.zadn.vn/w660/Uploaded/zdhwqwqd2/2020_01_05/2.jpg',
			title: 'Quốc hội Iraq thông qua việc rút toàn bộ quân Mỹ khỏi nước này?',
			cate: 'Thời sự',
			des:
				'Các nhà lập pháp tại Quốc hội Iraq hôm 5/1 đã bỏ phiếu quyết định Mỹ phải rút toàn bộ binh lính khỏi nước này.',
			date: '07/01/2019 08:00  ',
			status: 0,
			vip: 1,
			view: 9800,
			writer: 'Vũ Lương',
			content: (
				<div>
					<p>
						Cuộc bỏ phiếu của 170 nh&agrave; lập ph&aacute;p nhằm th&ocirc;ng qua nghị quyết y&ecirc;u cầu
						ch&iacute;nh phủ nước n&agrave;y hủy bỏ thỏa thuận an ninh với li&ecirc;n minh chống Nh&agrave;
						nước Hồi gi&aacute;o (IS) tự xưng do&nbsp;<a
							class="topic location autolink quickview"
							href="https://news.zing.vn/tieu-diem/hop-chung-quoc-hoa-ky.html"
						>
							Mỹ
						</a>&nbsp;dẫn đầu. D&ugrave; c&aacute;c nh&agrave; lập ph&aacute;p đ&atilde; th&ocirc;ng qua
						nhưng kết quả n&agrave;y vẫn chưa phải l&agrave; &ldquo;ph&aacute;n quyết cuối
						c&ugrave;ng&rdquo; đối với sự hiện diện của b&iacute;nh l&iacute;nh Mỹ tại Iraq cho tới khi Thủ
						tướng Adel Abdul Mahdi k&yacute; th&agrave;nh luật.
					</p>
					<p>
						Trước đ&oacute; Thủ tướng Mahdi n&oacute;i với Quốc hội rằng ch&iacute;nh phủ nước n&agrave;y
						phải thiết lập lịch tr&igrave;nh r&uacute;t to&agrave;n bộ binh l&iacute;nh nước ngo&agrave;i
						&ldquo;v&igrave; lợi &iacute;ch của chủ quyền quốc gia&rdquo;.
					</p>
					<p>
						Kiến nghị của &ocirc;ng Mahdi được đưa ra h&ocirc;m 5/1, sau vụ kh&ocirc;ng k&iacute;ch của Mỹ
						đ&atilde; ti&ecirc;u diệt tư lệnh lừng danh Qasem Soleimani, người đứng đầu lực lượng tinh nhuệ
						Quds của Vệ binh C&aacute;ch mạnh&nbsp;<a
							class="topic location autolink quickview"
							href="https://news.zing.vn/tieu-diem/iran.html"
						>
							Iran
						</a>, c&ugrave;ng một l&atilde;nh đạo chủ chốt kh&aacute;c của lực lượng d&acirc;n qu&acirc;n
						Iraq do Iran chống lưng.
					</p>
					<p>
						&ldquo;Việc xảy ra l&agrave; một vụ &aacute;m s&aacute;t ch&iacute;nh trị&rdquo;, &ocirc;ng
						Mahdi n&oacute;i về vụ kh&ocirc;ng k&iacute;ch của Mỹ h&ocirc;m 3/1. &ldquo;Iraq kh&ocirc;ng thể
						chấp nhận điều n&agrave;y&rdquo;.
					</p>
					<table class="picture" align="center">
						<tbody>
							<tr>
								<td class="pic">
									<img
										src="https://znews-photo.zadn.vn/w660/Uploaded/pgi_dhbpgunat/2019_12_14/my.jpg"
										alt="Quoc hoi Iraq thong qua viec rut toan bo quan My khoi nuoc nay hinh anh 1 my.jpg"
									/>
								</td>
							</tr>
							<tr>
								<td class="pCaption caption">
									<p>
										Người ủng hộ tại lễ tang của tướng Qassem Soleimani ở th&agrave;nh phố Ahvaz,
										Iran, ng&agrave;y 5/1. Ảnh:&nbsp;<em>AP.</em>
									</p>
								</td>
							</tr>
						</tbody>
					</table>
					<p>
						Thi thể của tư lệnh Soleimani đ&atilde; được đưa đến hai th&agrave;nh phố Najaf v&agrave;
						Karbala của Iraq trước khi trở về Iran h&ocirc;m 5/1 để tiến h&agrave;nh ch&ocirc;n cất - dự
						kiến diễn ra v&agrave;o ng&agrave;y 7/1 tại Kerman, qu&ecirc; hương của &ocirc;ng ở đ&ocirc;ng
						nam Iran, truyền th&ocirc;ng nh&agrave; nước Iran đưa tin.
					</p>
					<p>
						Theo&nbsp;<em>IRIB</em>, thi thể của tướng Soleimani được đưa đi bằng m&aacute;y bay tới
						th&agrave;nh phố Ahvaz, ph&iacute;a t&acirc;y nam Iran v&agrave;o s&aacute;ng sớm 5/1,
						v&agrave;i ng&agrave;y sau vụ kh&ocirc;ng k&iacute;ch bằng m&aacute;y bay kh&ocirc;ng người
						l&aacute;i của Mỹ ở Iraq.
					</p>
					<p>
						<em>IRIB</em>&nbsp;đăng tải video cho thấy chiếc quan t&agrave;i phủ cờ Iran được đưa ra khỏi
						một chiếc m&aacute;y bay tr&ecirc;n nền qu&acirc;n nhạc.
					</p>
				</div>
			)
		}
	]
};

function PostReducer(state = dataPost, action) {
	switch (action.type) {
		case ACCEPT:
			return {
				...state,
				isLogin: true,
				username: action.username
			};
		default:
			return state;
	}
}

export default PostReducer;
