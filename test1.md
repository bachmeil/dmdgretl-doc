# Getting Started

This page provides a simple example of the usage of the library on Linux
(tested on Ubuntu 18.04). It shouldn't be hard to get it working on other
OSes, but I don't have the hardware to mess around with it, so you'll need
to figure it out. If you're using Windows 10, I strongly encourage you to
use WSL.

We'll start by looking at one way to create a matrix and print it to the screen.

## Create the source file

Create a file named test.d holding

```
import gretl.matrix;
import std.stdio;

void main() {
	auto m = DoubleMatrix(3,3);
	m.print("Introducing our new matrix m");
	
	/* Fill using Row structs */
	Row(m, 0) = [1.1, 2.2, 3.3];
	Row(m, 1) = [4.4, 5.5, 6.6];
	Row(m, 2) = [7.7, 8.8, 9.9];
	
	/* Print */
	m.print("(3x3) matrix m");
}
```

## Understanding the program

Let's look at this program line-by-line.

```
import gretl.matrix;
```

Imports the module holding the necessary functionality.

```
import std.stdio;
```

Imports the D standard library functions used to print to the screen.

```
auto m = DoubleMatrix(3,3);
```

Creates a new matrix with the underlying data stored in memory allocated
by the D garbage collector. While there are times that the garbage collector
might cause performance issues, you generally want to take advantage of
the garbage collector whenever possible. dmdgretl fully supports
alternative memory management schemes, but it's not often that a professional
economist's time is worth less than the CPU's time when it comes to memory
management.

The keyword `auto` is used because the alternative

```
DoubleMatrix m = DoubleMatrix(3,3);
```

looks ridiculous.

So we now have a matrix allocated. One of the themes in D is *safety*.
When we allocate the memory for `m`, we have no way to know the values
currently held in those memory locations. For that reason, they all
hold `nan`, for "not a number". We can confirm that the elements are 
initialized to `nan` by printing out the matrix:

```
m.print("Introducing our new matrix m");
```

The message is optional - if it's not included, the message will be skipped.
When you run the program later, you'll see that it spits out

```
Introducing our new matrix m
nan nan nan 
nan nan nan 
nan nan nan 
```

Once we've allocated a matrix, we need to fill the values with something
meaningful. We'll use one approach to do it manually.

```
Row(m, 0) = [1.1, 2.2, 3.3];
Row(m, 1) = [4.4, 5.5, 6.6];
Row(m, 2) = [7.7, 8.8, 9.9];
```

The notation `Row(m, 0)` refers to the first row of `m`. (Note that the
first index value in D is 0 rather than 1.)

Finally, we'll print out the matrix to confirm that it did what we expected.

```
m.print("(3x3) matrix m");
```

The output when you run it later is

```
(3x3) matrix m
1.1 2.2 3.3 
4.4 5.5 6.6 
7.7 8.8 9.9 
```

## Getting the Library

The easiest way to get the libraries is to clone the repo and work in
that directory.

## Makefile

The easier way to compile your program is to use a Makefile (or to
simply type in the commands manually:

```
dmd test.d inst/gretl/*.d -L-lgretl-1.0 -version=standalone
./test
```

The flag `-L-lgretl-1.0` tells dmd to link against libgretl-1.0 (which
is installed when you install Gretl). `-version=standalone` tells the
compiler that you're going to create a standalone D program, as opposed
to a library that will be called from R.

## Dub

The harder way to compile your program is to use Dub. I don't use Dub
very often, and I find the documentation frustrating, so I won't spend
much time on it. Here's a working dub.sdl that will compile the program:

```
name "dmdgretl-example"
description "Example usage of the dmdgretl library"
authors "Lance Bachmeier"
license "GPL-2.0"
targetType "executable"
lflags "-lgretl-1.0"
versions "standalone" 
sourcePaths "source" "inst/gretl"
```

This assumes you've created the file source/app.d to hold the code. From
now on I will assume that you are compiling manually using a Makefile.

*Created: 2019/07/17*  
*Last Update: 2019/07/17*
