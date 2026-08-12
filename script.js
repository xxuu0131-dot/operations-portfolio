const metricSets = {
  all: {
    posts: { label: "有效投稿", value: "1,280", unit: "篇" },
    quality: { label: "优质内容率", value: "81.6", unit: "%" },
    product: { label: "商品关联率", value: "86.2", unit: "%" },
    orders: { label: "关联成交", value: "96", unit: "单" }
  },
  quality: {
    posts: { label: "优质内容", value: "1,044", unit: "篇" },
    quality: { label: "优质内容率", value: "88.4", unit: "%" },
    product: { label: "商品关联率", value: "91.7", unit: "%" },
    orders: { label: "内容成交", value: "82", unit: "单" }
  },
  commerce: {
    posts: { label: "关联商品内容", value: "1,103", unit: "篇" },
    quality: { label: "内容优质率", value: "84.2", unit: "%" },
    product: { label: "商品关联率", value: "100", unit: "%" },
    orders: { label: "关联成交", value: "96", unit: "单" }
  }
};

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const values = metricSets[button.dataset.filter];
    Object.entries(values).forEach(([key, metric]) => {
      document.querySelector(`[data-metric-label="${key}"]`).textContent = metric.label;
      document.querySelector(`[data-metric="${key}"]`).textContent = metric.value;
      document.querySelector(`[data-metric-unit="${key}"]`).textContent = metric.unit;
    });
  });
});

const hotspotData = {
  retro: { exposure: "1,082,000", clicks: "2,200", ctr: "0.26%", productCtr: "6.13%", orders: "13", quality: "57.82%", content: "美式复古内容流", contentCount: "22", product: "复古穿搭商品区", productCount: "16", deliveryCount: "2" },
  colorfit: { exposure: "2,390,000", clicks: "4,900", ctr: "0.21%", productCtr: "5.86%", orders: "24", quality: "77.86%", content: "Colorfit 内容流", contentCount: "24", product: "精选商品区", productCount: "18", deliveryCount: "2" },
  summer: { exposure: "936,000", clicks: "1,900", ctr: "0.20%", productCtr: "5.18%", orders: "29", quality: "54.27%", content: "暑期场景内容流", contentCount: "28", product: "穿搭商品区", productCount: "20", deliveryCount: "2" }
};

document.querySelectorAll(".hotspot-switch button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".hotspot-switch button").forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    document.querySelectorAll("[data-topic-panel]").forEach((panel) => panel.classList.add("hidden"));
    document.querySelectorAll("[data-topic-copy]").forEach((panel) => panel.classList.add("hidden"));
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    document.querySelector(`[data-topic-panel="${button.dataset.view}"]`).classList.remove("hidden");
    document.querySelector(`[data-topic-copy="${button.dataset.view}"]`).classList.remove("hidden");
    const values = hotspotData[button.dataset.view];
    Object.entries({ exposure: values.exposure, clicks: values.clicks, ctr: values.ctr, productCtr: values.productCtr, orders: values.orders, quality: values.quality }).forEach(([key, value]) => {
      document.querySelector(`[data-hotspot-metric="${key}"]`).textContent = value;
    });
    document.querySelector('[data-hotspot-source]').textContent = values.source;
    document.querySelector('[data-hotspot-module="content"]').textContent = values.content;
    document.querySelector('[data-hotspot-module="product"]').textContent = values.product;
    document.querySelector('[data-hotspot-count="content"]').textContent = values.contentCount;
    document.querySelector('[data-hotspot-count="product"]').textContent = values.productCount;
    document.querySelector('[data-hotspot-count="delivery"]').textContent = values.deliveryCount;
    document.querySelector('[data-hotspot-count="quality"]').textContent = values.quality;
  });
});

const revealItems = document.querySelectorAll(".project, .section-heading");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}
