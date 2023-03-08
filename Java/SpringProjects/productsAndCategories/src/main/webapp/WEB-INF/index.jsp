<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Home Page</title>
</head>
<body>
	<h1>Home Page</h1>
	<p><a href="/product/new">New product</a></p>
	<p><a href="/category/new">New Category</a></p>
	<div>
		<div>
			<h2>Products</h2>
			<ul>
			<c:forEach var="product" items="${products}">
				<li><a href="/product/${product.id}">${product.name}</a></li>
			</c:forEach>
			</ul>
		</div>
		<div>
			<h2>Categories</h2>
			<ul>
				<c:forEach var="category" items="${categories}">
					<li><a href="/category/${category.id}">${category.name}</a></li>
				</c:forEach>
			</ul>
		</div>
	</div>
</body>
</html>