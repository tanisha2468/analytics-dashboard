import React, { useEffect, useState } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import { fetchSales } from "../services/api";

const Dashboard = () => {
  const [sales, setSales] = useState([]);
  const [allSales, setAllSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  const loadData = async () => {
    setLoading(true);
    const res = await fetchSales();
    setAllSales(res.data.data);
    setSales(res.data.data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (!selectedCategory) {
      setSales(allSales);
    } else {
      const filtered = allSales.filter(
        (item) => item.category === selectedCategory,
      );
      setSales(filtered);
    }
  }, [selectedCategory, allSales]);

  if (loading)
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>Loading...</h2>
    );

  const colors = [
    "#4F46E5",
    "#06B6D4",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
  ];

  const categoryRevenue = {};
  const categoryQuantity = {};
  const dateRevenue = {};

  sales.forEach((item) => {
    if (!categoryRevenue[item.category]) {
      categoryRevenue[item.category] = 0;
      categoryQuantity[item.category] = 0;
    }

    categoryRevenue[item.category] += item.revenue;
    categoryQuantity[item.category] += item.quantity;

    const date = new Date(item.date).toLocaleDateString();
    if (!dateRevenue[date]) dateRevenue[date] = 0;
    dateRevenue[date] += item.revenue;
  });

  const barData = {
    labels: Object.keys(categoryRevenue),
    datasets: [
      {
        label: "Revenue by Category",
        data: Object.values(categoryRevenue),
        backgroundColor: colors,
      },
    ],
  };

  const lineData = {
    labels: Object.keys(dateRevenue),
    datasets: [
      {
        label: "Revenue Over Time",
        data: Object.values(dateRevenue),
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79,70,229,0.2)",
        fill: false,
      },
    ],
  };

  const areaData = {
    labels: Object.keys(dateRevenue),
    datasets: [
      {
        label: "Revenue Trend",
        data: Object.values(dateRevenue),
        borderColor: "#10B981",
        backgroundColor: "rgba(16,185,129,0.2)",
        fill: true,
      },
    ],
  };

  const pieData = {
    labels: Object.keys(categoryRevenue),
    datasets: [
      {
        data: Object.values(categoryRevenue),
        backgroundColor: colors,
      },
    ],
  };

  const doughnutData = {
    labels: Object.keys(categoryQuantity),
    datasets: [
      {
        data: Object.values(categoryQuantity),
        backgroundColor: colors,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
  };

  const uniqueCategories = [...new Set(allSales.map((s) => s.category))];

  const cardStyle = {
    background: "#f9fafb",
    padding: "20px",
    borderRadius: "12px",
    height: "320px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "linear-gradient(135deg, #4F46E5, #06B6D4)",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          background: "#ffffff",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <h1 style={{ margin: 0 }}>Analytics Dashboard</h1>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            style={{
              padding: "8px 14px",
              borderRadius: "8px",
              border: "none",
              background: "#4F46E5",
              color: "#fff",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>

        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              fontWeight: "500",
            }}
          >
            <option value="">All Categories</option>
            {uniqueCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
          }}
        >
          <div style={cardStyle}>
            <Bar data={barData} options={chartOptions} />
          </div>

          <div style={cardStyle}>
            <Line data={lineData} options={chartOptions} />
          </div>

          <div style={cardStyle}>
            <Line data={areaData} options={chartOptions} />
          </div>

          <div style={cardStyle}>
            <Pie data={pieData} options={chartOptions} />
          </div>

          <div
            style={{
              ...cardStyle,
              gridColumn: "span 2",
              height: "350px",
            }}
          >
            <Doughnut data={doughnutData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
