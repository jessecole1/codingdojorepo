<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>List of Books</title>
</head>
<body>
	<div>
		<div>
			<h1>Welcome, <c:out value="${user.name}"/></h1>
			<p>Books from everyone's shelves.</p>
		</div>
		<div>
			<p><a href="/logout">logout</a></p>
			<p><a href="/new/book">+ Add to my shelf</a></p>
		</div>
	</div>
	<div>
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Title</th>
					<th>Author Name</th>
					<th>Posted By</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="book" items="${books}">
				<c:choose>
				<c:when test="${book.borrower != null}">
				</c:when>
				<c:when test="${user != book.user}">
				<tr>
					<td><c:out value="${book.id}"/></td>
					<td><a href="/one/book/${book.id}"><c:out value="${book.title}"/></a></td>
					<td><c:out value="${book.author}"/></td>
					<td><c:out value="${book.user.name}"/></td>
  					<td><a href="/one/book/borrow/${book.id}">Borrow</a>
				</tr>
				</c:when>
				<c:otherwise>
				<tr>
					<td><c:out value="${book.id}"/></td>
					<td><a href="/one/book/${book.id}"><c:out value="${book.title}"/></a></td>
					<td><c:out value="${book.author}"/></td>
					<td><c:out value="${book.user.name}"/></td>
<%--  					<td><a href="/one/book/borrow/${book.id}">Borrow</a></td>  --%>
				</tr>
				</c:otherwise>
				</c:choose>
				</c:forEach>
			</tbody>
		</table>
		<table>
			<thead>
				<tr>
					<th>TD</th>
					<th>Title</th>
					<th>Author Name</th>
					<th>Posted By</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="book" items="${books}">
				<c:choose>
					<c:when test="${user == book.borrower}">
						<tr>
							<td><c:out value="${book.id}"/></td>
							<td><a href="/one/book/${book.id}"><c:out value="${book.title}"/></a></td>
							<td><c:out value="${book.author}"/></td>
							<td><c:out value="${book.user.name}"/></td>
							<td><a href="/one/book/return/${book.id}">Return</a></td>
						</tr>
					</c:when>
				</c:choose>
				</c:forEach>
			</tbody>
		</table>
	</div>
</body>
</html>