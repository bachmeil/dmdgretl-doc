# Getting Started

This page provides a simple example of the usage of the library on Linux
(tested on Ubuntu 18.04). It shouldn't be hard to get it working on other
OSes, but I don't have the hardware to mess around with it, so you'll need
to figure it out. If you're using Windows 10, I strongly encourage you to
use WSL.

We'll start by showing one way to create a matrix and print its elements
to the screen.

## Clone the dgretl repo

The easiest way to start a dgretl project is to clone the repo:

```
git clone https://github.com/bachmeil/dgretl.git
```

There are four directories in the repo as of this writing: gretl/, which
holds the library source files, gretlexp/, which holds the source files
for experimental pieces of the library, learn/, which is there to make it
fast to get started, and examples/ which provides a bigger set of examples
for things that I may not have documented yet.

To follow along with this example, open the learn/ directory in your
terminal.

## The source file

In the learn/ directory, you'll find a file named test.d. The code in
that file looks like this:

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

You can start by compiling and running the program. You can run `make`
in the learn/ directory to compile test.d, run the resulting app, and delete
the app so it doesn't accidentally get committed to the repo.

Alternatively, you can call `dub run` to let Dub do the compilation.

## Understanding the program

Let's look at this program line-by-line.

`import gretl.matrix;` Imports the module holding the necessary functionality.

`import std.stdio;` Imports the D standard library functions used to print to the screen.

`auto m = DoubleMatrix(3,3);` Creates a new matrix with the underlying data stored in memory allocated
by the D garbage collector. We use the keyword `auto` is because the 
alternative, `DoubleMatrix m = DoubleMatrix(3,3);` looks ridiculous.

One of the themes in D is *safety*.
When we allocate the memory for `m`, we have no way to know the values
currently held in those memory locations. For that reason, each memory
address is initialized to `nan`, for "not a number". We can confirm that
the elements are initialized to `nan` by printing out the matrix:
`m.print("Introducing our new matrix m");`

The output is as expected:

```
Introducing our new matrix m
nan nan nan 
nan nan nan 
nan nan nan 
```

Once we've allocated the matrix, we need to fill the values with something
meaningful. Here's one approach to doing it manually.

```
Row(m, 0) = [1.1, 2.2, 3.3];
Row(m, 1) = [4.4, 5.5, 6.6];
Row(m, 2) = [7.7, 8.8, 9.9];
```

The notation `Row(m, 0)` refers to the first row of `m`. (Note that the
first index value in D is 0 rather than 1.) Finally, we'll print out the 
matrix to confirm that it did what we expected. `m.print("(3x3) matrix m");`
The output is

```
(3x3) matrix m
1.1 2.2 3.3 
4.4 5.5 6.6 
7.7 8.8 9.9 
```

## A note on the garbage collector

While there are times that the garbage collector
might cause performance issues, you generally want to take advantage of
the garbage collector as much as possible. dmdgretl fully supports
alternative memory management schemes, but it's not often that a professional
economist's time is worth less than the CPU's time when it comes to memory
management.

What if you don't know anything about garbage collection or memory
management? Then dgretl is for you! You will get a good programming
language, plus good performance, and you don't have to know anything
about either of them if you stick with the garbage collector, which is
the default for everything.

## Dub

I don't use Dub very often, and I find the documentation frustrating, so 
I won't spend much time on it. That shouldn't stop you from using Dub
if it makes you more productive. The included learn/dub.sdl should be
enough to get you going.

*Created: 2019/07/17*  
*Last Update: 2019/07/17*
