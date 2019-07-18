# Introduction

[Gretl](http://gretl.sourceforge.net/) provides a library of functions
for econometric analysis written in C. This package provides an interface
to the Gretl library for D programs. It was designed concurrently with
the embedr package so that R functions written in D could access all the
functionality of the Gretl library.

I believe D is an excellent choice for numerical programming. While this
package is still a work in progress (notably when it comes to time series
analysis) it already provides a considerable foundation to build on. Among
other things, it provides:

- Linear algebra
- Random number generation and distributions
- Descriptive statistics
- Linear regression
- A variety of alternative estimation methods (logit, probit, etc.)
- ARMA and unit root tests

An advantage of calling into Gretl, beyond the fact that I don't need to
spend thousands of hours writing all that code, is that the library has
been used heavily for many years, and is therefore well tested.

While providing comprehensive, high quality documentation is not possible
for someone with my time budget, this site attempts to provide you with
enough examples and discussion that you can get going. The underlying
source code is intentionally simple, so modifying the libraries for your
own use should not be difficult.
