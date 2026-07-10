# Hands-on 4: Difference between JPA, Hibernate and Spring Data JPA

## Objective
Understand the differences between **JPA**, **Hibernate**, and **Spring Data JPA**, and how they work together in Java applications.

---

# Java Persistence API (JPA)

## Definition
Java Persistence API (JPA) is a **Java specification (JSR 338)** that defines a standard way to map Java objects to relational databases.

## Key Points
- It is a **specification**, not a framework.
- Defines interfaces and annotations for Object Relational Mapping (ORM).
- Does **not** provide an implementation.
- Requires an implementation such as **Hibernate**, **EclipseLink**, or **OpenJPA**.

## Advantages
- Standard API independent of any ORM provider.
- Improves portability across different ORM implementations.
- Supports annotations like:
  - `@Entity`
  - `@Table`
  - `@Id`
  - `@OneToMany`
  - `@ManyToOne`

---

# Hibernate

## Definition
Hibernate is a popular **ORM framework** and one of the most widely used implementations of the JPA specification.

## Key Points
- Implements all JPA features.
- Provides additional Hibernate-specific features beyond JPA.
- Handles mapping between Java objects and database tables.
- Manages sessions, transactions, caching, and query execution.

## Advantages
- Automatic SQL generation.
- First-level and second-level caching.
- Lazy loading support.
- HQL (Hibernate Query Language).
- Pagination and batch processing.

### Hibernate Example

```java
public Integer addEmployee(Employee employee){
    Session session = factory.openSession();
    Transaction tx = null;
    Integer employeeID = null;

    try {
        tx = session.beginTransaction();
        employeeID = (Integer) session.save(employee);
        tx.commit();
    } catch (HibernateException e) {
        if (tx != null)
            tx.rollback();
        e.printStackTrace();
    } finally {
        session.close();
    }
    return employeeID;
}
```

---

# Spring Data JPA

## Definition
Spring Data JPA is a Spring framework module that simplifies database access by reducing boilerplate code required for JPA.

## Key Points
- It is **not** a JPA implementation.
- Uses JPA implementations like Hibernate internally.
- Provides repository interfaces such as `JpaRepository`.
- Automatically generates CRUD operations.
- Integrates seamlessly with Spring's transaction management.

## Advantages
- Very little code required.
- Built-in CRUD methods.
- Automatic query generation.
- Pagination and sorting support.
- Custom query support using JPQL and native SQL.

### Repository

```java
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
```

### Service

```java
@Autowired
private EmployeeRepository employeeRepository;

@Transactional
public void addEmployee(Employee employee) {
    employeeRepository.save(employee);
}
```

---

# Comparison Table

| Feature | JPA | Hibernate | Spring Data JPA |
|----------|-----|-----------|-----------------|
| Type | Specification | ORM Framework | Spring Module |
| Implementation | No | Yes | No |
| ORM Provider | No | Yes | Uses Hibernate or another JPA provider |
| Boilerplate Code | More | Moderate | Very Less |
| CRUD Operations | Manual | Manual | Automatically Available |
| Transaction Management | Through provider | Yes | Integrated with Spring |
| Query Support | JPQL | HQL, JPQL, Native SQL | Derived Queries, JPQL, Native SQL |
| Repository Support | No | No | Yes (`JpaRepository`) |

---

# Relationship between JPA, Hibernate, and Spring Data JPA

```
Application
      │
      ▼
Spring Data JPA
      │
      ▼
JPA Specification
      │
      ▼
Hibernate (Implementation)
      │
      ▼
Relational Database
```

---

# Conclusion

- **JPA** defines the standard specification for object-relational mapping in Java but does not provide an implementation.
- **Hibernate** is a powerful ORM framework that implements JPA and offers additional advanced features.
- **Spring Data JPA** builds on top of JPA by reducing boilerplate code, providing repository interfaces, automatic CRUD operations, and seamless integration with the Spring Framework.

Together, they simplify database interaction, improve code maintainability, and enable rapid application development.

---

