let registeredMembers = [];
let totalRevenue = 0;
let checkInCount = 0;
let running = true;

do {
    let menu = `
===== FITNESS GYM =====

1 - Dang ky hoi vien moi
2 - Tinh tien goi tap
3 - Quet ma the check-in
4 - Xuat bao cao va thoat

Nhap lua chon:
`;
    let choice = Number(prompt(menu));

    switch (choice) {
        case 1:
            let memberName = prompt("Nhap ten hoi vien: ");

            if (memberName === null || memberName.trim() === "") {
                alert("Loi: Vui long nhap ten hoi vien!");
                break;
            }

            memberName = memberName.trim();

            let memberCode = prompt("Nhap ma the hoi vien: ");

            if (memberCode === null || memberCode.trim() === "") {
                alert("Loi: Vui long nhap ma the!");
                break;
            }

            memberCode = memberCode.trim().toUpperCase();

            if (!memberCode.startsWith("GYM-")) {
                alert("Loi: Ma the phai bat dau bang GYM-!");
                break;
            }

            let packageName = prompt(
                "Nhap goi tap:\nSTANDARD\nVIP"
            );

            if (packageName === null) {
                break;
            }

            packageName = packageName.trim().toUpperCase();

            if (packageName !== "STANDARD" && packageName !== "VIP") {
                alert("Loi: Goi tap chi duoc la STANDARD hoac VIP!");
                break;
            }

            let months = Number(prompt("Nhap so thang dang ky: "));

            if (months <= 0 || isNaN(months)) {
                alert("Loi: So thang phai lon hon 0!");
                break;
            }

            let ptAnswer = prompt("Co thue PT khong? (Y/N): ");

            if (ptAnswer === null) {
                ptAnswer = "N";
            }

            ptAnswer = ptAnswer.trim().toUpperCase();

            let hasPT = false;

            if (ptAnswer === "Y") {
                hasPT = true;
            }

            let member = {
                name: memberName,
                code: memberCode,
                package: packageName,
                months: months,
                hasPT: hasPT
            };

            registeredMembers.push(member);

            alert("Dang ky hoi vien thanh cong!");

            console.log("\n===== THONG TIN HOI VIEN =====");
            console.log("Ho ten: " + memberName);
            console.log("Ma the: " + memberCode);
            console.log("Goi tap: " + packageName);
            console.log("So thang: " + months);

            if (hasPT) {
                console.log("PT: Co");
            } else {
                console.log("PT: Khong");
            }

            break;
        case 2:
            if (registeredMembers.length === 0) {
                alert("Loi: Vui long dang ky hoi vien truoc!");
                break;
            }

            let currentMember =
                registeredMembers[registeredMembers.length - 1];

            let pricePerMonth = 0;

            if (currentMember.package === "STANDARD") {
                pricePerMonth = 500000;
            } else if (currentMember.package === "VIP") {
                pricePerMonth = 800000;
            }

            let packageTotal =
                pricePerMonth * currentMember.months;

            let ptTotal = 0;

            if (currentMember.hasPT) {
                ptTotal = 300000 * currentMember.months;
            }

            let subtotal = packageTotal + ptTotal;

            let discount = 0;

            if (currentMember.months >= 12) {
                discount = subtotal * 0.25;
            } else if (currentMember.months >= 6) {
                discount = subtotal * 0.15;
            }

            let finalTotal = subtotal - discount;

            totalRevenue += finalTotal;

            console.log("\n" + "-".repeat(50));
            console.log("              HOA DON FITNESS GYM");
            console.log("-".repeat(50));

            console.log("Hoi vien: " + currentMember.name);
            console.log("Ma the: " + currentMember.code);
            console.log("Goi tap: " + currentMember.package);
            console.log("So thang: " + currentMember.months);

            console.log("-".repeat(50));

            console.log(
                "Tien goi tap:".padEnd(25) +
                packageTotal.toLocaleString("vi-VN").padStart(15) +
                " VND"
            );

            console.log(
                "Tien PT:".padEnd(25) +
                ptTotal.toLocaleString("vi-VN").padStart(15) +
                " VND"
            );

            console.log(
                "Tam tinh:".padEnd(25) +
                subtotal.toLocaleString("vi-VN").padStart(15) +
                " VND"
            );

            console.log(
                "Chiet khau:".padEnd(25) +
                discount.toLocaleString("vi-VN").padStart(15) +
                " VND"
            );

            console.log(
                "Thanh tien:".padEnd(25) +
                finalTotal.toLocaleString("vi-VN").padStart(15) +
                " VND"
            );

            console.log("-".repeat(50));

            alert("Tinh tien thanh cong! Xem hoa don trong Console.");

            break;
        case 3:
            let cardCode = prompt("Nhap ma the check-in: ");

            if (cardCode === null || cardCode.trim() === "") {
                alert("Loi: Vui long nhap ma the!");
                break;
            }

            cardCode = cardCode.trim().toUpperCase();

            let currentYear = new Date().getFullYear();

            if (!cardCode.startsWith("GYM-")) {
                alert("Loi: Ma the phai bat dau bang GYM-!");
                break;
            }

            if (!cardCode.endsWith(String(currentYear))) {
                alert(
                    "Loi: Ma the phai ket thuc bang nam " +
                    currentYear + "!"
                );
                break;
            }

            checkInCount++;

            alert("Check-in thanh cong!");

            console.log(
                "Check-in thanh cong: " +
                cardCode
            );

            console.log(
                "So luot check-in hien tai: " +
                checkInCount
            );

            break;
        case 4:
            console.log("\n" + "=".repeat(50));
            console.log("       BAO CAO TONG KET CA TRUC");
            console.log("=".repeat(50));

            console.log(
                "So hoi vien dang ky: ".padEnd(30) +
                registeredMembers.length
            );

            console.log(
                "So luot check-in:".padEnd(30) +
                checkInCount
            );

            console.log(
                "Tong doanh thu:".padEnd(30) +
                totalRevenue.toLocaleString("vi-VN") +
                " VND"
            );

            console.log("=".repeat(50));

            console.log("Da ket thuc ca truc.");

            running = false;

            break;
        default:
            alert(
                "Loi: Lua chon khong hop le! " +
                "Vui long chon tu 1 den 4."
            );
    }
} while (running);