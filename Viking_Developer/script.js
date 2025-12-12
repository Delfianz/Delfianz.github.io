const content = {
    agile: `
      <ul>
        <li>Mobile App Development</li>
        <li>Website Development</li>
        <li>E-Commerce Platform</li>
        <li>Customer Experience (CX, UI, UX)</li>
        <li>SEO/SEM Solutions</li>
      </ul>
    `,
    website: `
      <ul>
        <li>Company Profile Website</li>
        <li>Landing Page</li>
        <li>Custom Web Apps</li>
      </ul>
    `,
    mobile: `
      <ul>
        <li>Android Apps</li>
        <li>iOS Apps</li>
        <li>Hybrid Apps</li>
      </ul>
    `,
    security: `
      <ul>
        <li>Penetration Testing</li>
        <li>Application Security</li>
        <li>Security Monitoring</li>
      </ul>
    `
};

// //Website Development
// Mobile App Development
// E-Commerce Platform
// Customer Experience (CX, UI, UX)
// SEO/SEM Solutions

// EVENT: hover kiri → update kanan
document.querySelectorAll(".kategori-list li").forEach(item => {
    item.addEventListener("mouseover", () => {
        const target = item.getAttribute("data-target");
        document.getElementById("contentBox").innerHTML = content[target];
    });
});


// EVENT: hover kiri → update kanan + highlight
document.querySelectorAll(".kategori-list li").forEach(item => {

    item.addEventListener("mouseover", () => {
        const target = item.getAttribute("data-target");

        // update konten kanan
        document.getElementById("contentBox").innerHTML = content[target];

        // hapus highlight semua item
        document.querySelectorAll(".kategori-list li").forEach(li => {
            li.classList.remove("active");
        });

        // beri highlight ke item yang dihover
        item.classList.add("active");
    });

});

// Highlight kolom kanan saat hover
document.addEventListener("mouseover", function(e) {
    if (e.target.closest("#contentBox ul li")) {

        // Hapus semua active di kanan
        document.querySelectorAll("#contentBox ul li").forEach(li => {
            li.classList.remove("active");
        });

        // Tambah active ke item yang dihover
        e.target.classList.add("active");
    }
});

document.querySelectorAll('.category-nav li').forEach(item => {
    item.addEventListener('click', () => {

        document.querySelectorAll('.category-nav li').forEach(li => {
            li.classList.remove('active');
        });

        item.classList.add('active');
    });
});

