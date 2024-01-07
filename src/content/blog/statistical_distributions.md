---

title: 'Statistical Distributions'
description: 'Concepts to understand statistical distributions.'
author: 'Giordano Alvitez'
tags: ["statistics", "statistical distributions"]
pubDate: 2024-01-03
heroImage: "/project/statistical_distributions/statistical_distributions.png"
url: "statistical_distributions"
type_content: "blog"
badge: "New"
draft: False
---

Statistical distributions are fundamental in understanding and representing how data values are spread or varied. Each distribution has its own unique properties and applications. The type of statistical distribution used often depends on the type of variable (continuous and discrete) 

## Discrete Variables

### Bernoulli Distribution
The Bernoulli distribution is a simple discrete probability distribution that has only two possible outcomes, commonly labeled as "success" and "failure." The number of trials is just one (a special case of the binomial distribution).

**Key aspects**
The probability mass function (PMF) of a Bernoulli distribution is given by:  

<!-- $$ \begin{cases} p & \text{if } k=1, \\ 1-p & \text{if } k=0  \end{cases} $$ -->

<!-- ***<p style="text-align: center;">Text with basic formatting applied</p>*** -->

***<p style="text-align: center;">$$ \begin{cases} p & \text{if } k=1, \\ 1-p & \text{if } k=0  \end{cases} $$</p>***
where $p$ is the probability of success (k=1), and \( 1-$p$ \) is the probability of failure ($k$=0).

**Examples**:
- Flipping a coin (where heads could be defined as success and tails as failure).
- A quality control check where an item is either defective (failure) or non-defective (success).

**Python Example**:
To simulate a Bernoulli trial using we could use `numpy.random.binomial` with n=1. 

```py
# Parameters for Bernoulli distribution
p = 0.5  # Probability of success
size = 1000  # Number of samples

# Generating Bernoulli samples
bernoulli_samples = np.random.binomial(1, p, size) # it generates either 1 or 0 'size' times.

# Plotting the distribution
plt.figure(figsize=(6, 4))
plt.hist(bernoulli_samples, bins=[-0.5, 0.5, 1.5], rwidth=0.5, color='blue', alpha=0.7)
plt.xticks([0, 1])
plt.title('Bernoulli Distribution (p = 0.5)')
plt.xlabel('Outcome')
plt.ylabel('Frequency')
plt.show()
```

![](/project/statistical_distributions/bernoulli_distribution.png)

### Binomial Distribution
The Binomial distribution is a discrete probability distribution that describes the number of successes in a fixed number of **independent trials** of a binary experiment. It is an extension of the Bernoulli distribution across multiple trials.  

**Probability math representation**: 
$$P(X = k) = (\frac{n}{k})p^k(1-p)^{n-k}$$

where $(\frac{n}{k})$ is the binomial coefficient, $n$ is number of trials, $k$ is the number of successes, and $p$ the probability of success.

**Examples**:
- Flipping a coin a certain number of times and counting the number of heads (or tails).
- The number of defective items in a batch when each item has a fixed probability of being defective.

**Python Example**:
The Binomial distribution can be simulated using ``numpy.random.binomial(n, p, size)``, where n is the number of trials, p is the probability of success, and size is the number of experiments.


```py
# Parameters for Binomial distribution
n = 10  # Number of trials
p = 0.5  # Probability of success
size = 1000  # Number of samples

# Generating Binomial samples
binomial_samples = np.random.binomial(n, p, size)

# Plotting the distribution
plt.figure(figsize=(8, 5))
plt.hist(binomial_samples, bins=range(n+2), rwidth=0.8, color='green', alpha=0.7)
plt.title('Binomial Distribution (n=10, p=0.5)')
plt.xlabel('Number of Successes')
plt.ylabel('Frequency')
plt.xticks(range(n+1))
plt.show()


```

![](/project/statistical_distributions/binomial_distribution.png)

### Poisson Distribution
The Poisson distribution is a discrete probability distribution that expresses the probability of a given number of events occurring in a fixed interval of time or space, assuming these events occur with a known constant mean rate and independently of the time since the last event.

**Probability math representation**: 
The probability mass function (PMF) of the Poisson distribution for observing $k$ events
$$P(k|\lambda) = \frac{\lambda^k e^{-\lambda}}{k!}$$
 where $\lambda$ is the average number of events per interval, $e$ is Euler's number (approximately 2.71828), and $k!$ is the factorial of $k$.  

This distribution is particularly useful for modeling the number of times an event occurs in a fixed interval of time or space, like the number of emails received in an hour or the number of cars passing through a toll booth in a day, assuming these events happen independently and at a constant average rate.

**Time of Space interval:** The distribution applies to events in a fixed period of time, a specific area, volume, etc.  

**Examples**:
- The number of fraud emails received in an hour.
- The number of decay events per unit time from a radioactive source.

**Python Example**:
In Python, Poisson distributed data can be simulated using ``numpy.random.poisson(lam, size)``, where lam is the rate $\lambda$, and ``size`` is the number of experiments.

```py
lam = 5  # Rate parameter (lambda)
size = 1000  # Number of samples

# Generating Poisson samples
poisson_samples = np.random.poisson(lam, size)

# Plotting the distribution
plt.figure(figsize=(8, 5))
plt.hist(poisson_samples, bins=range(np.max(poisson_samples)+1), rwidth=0.8, color='purple', alpha=0.7)
plt.title('Poisson Distribution (λ=5)')
plt.xlabel('Number of Events')
plt.ylabel('Frequency')
plt.show()
```
![](/project/statistical_distributions/poisson_distribution.png)

### Geometric Distribution
The Geometric distribution is a discrete probability distribution that models the number of trials needed to achieve the first success in a sequence of independent Bernoulli trials, each with the same probability of success. It is a simple model that answers the question, "How many trials will it take to achieve the first success?"


**Probability math representation**:   
The probability mass function (PMF) of the Geometric distribution for observing the first success on the $k$-th trial: 
$$P(k|p) = (1-p)^{k-1}p$$

 where $p$ is the probability of success on a single trial, and $(1 - p)$ is the probability of failure.


 **Memoryless Property:** The Geometric distribution has a unique memoryless property, meaning that the probability of success in future trials does not depend on the number of failures observed in the past.

 **Examples**:
- The number of coin flips until the first head is observed.
- The number of sales calls needed until the first sale is made.

**Python Example**:
In Python, you can simulate a Geometric distribution using ``numpy.random.geometric(p, size)``, where $p$ is the probability of success, and $size$ is the number of experiments.

```py

p = 0.3  # Probability of success
size = 1000  # Number of samples
# Generating Geometric samples
geometric_samples = np.random.geometric(p, size)

# Plotting the distribution
plt.figure(figsize=(8, 5))
plt.hist(geometric_samples, bins=range(1, np.max(geometric_samples)+2), rwidth=0.8, color='orange', alpha=0.7)
plt.title('Geometric Distribution (p=0.3)')
plt.xlabel('Number of Trials Until First Success')
plt.ylabel('Frequency')
plt.show()

```
![](/project/statistical_distributions/geometric_distribution.png)

> The distribution is skewed to the right, which is typical for Geometric distributions. This skewness indicates that while the first success might occur in the initial trials, there's also a non-negligible probability of requiring a larger number of trials.
> 
This kind of distribution is useful in scenarios where you're interested in determining the likelihood of a certain number of attempts required to achieve a first success in repeated trials, such as the number of times a new task must be attempted before it is completed successfully.

## Continuous Variables

### Normal Distribution (Gaussian Distribution)
The Normal distribution, also known as the Gaussian distribution, is a continuous probability distribution that is symmetrical around its mean, showing that data near the mean are more frequent in occurrence than data far from the mean. It is one of the most important probability distributions in statistics due to its widespread occurrence in many natural phenomena.

**Probability math representation**:   
The probability density function (PDF) of the Normal distribution is given by:
  $$f(x | \mu, \sigma) = \frac{1}{\sigma \sqrt{2 \pi}} e^{ -\frac{1}{2} \left( \frac{x - \mu}{\sigma} \right)^2 }$$

where $\mu$ is the mean or expectation of the distribution (also its median and mode), $\sigma$ is the standard deviation, $\sigma^2$ is the variance, $e$ is Euler's number.

**Characteristics**:
- **Symmetry**: The Normal distribution is symmetric around its mean.
- **Bell Curve**: It has a bell-shaped curve where the spread of the distribution is determined by the standard deviation.
- **Mean, Median, Mode**: In a Normal distribution, the mean, median, and mode are all equal.
- **Asymptotic**: The tails of the distribution approach the x-axis asymptotically; theoretically, they never touch the x-axis.
- **68-95-99.7 Rule**: About 68% of values drawn from a Normal distribution are within one standard deviation away from the mean; about 95% are within two standard deviations; and about 99.7% lie within three standard deviations.

**Applications**:
- In natural sciences and social sciences, the Normal distribution is used to represent real-valued random variables whose distributions are not known.
- In finance, it's used to model asset prices, market returns, and various other financial variables.


**Python Example**:  
In Python, you can use libraries like `numpy` and `scipy` to work with the Normal distribution. For example, `numpy.random.normal(mu, sigma, size)` can generate samples from a Normal distribution. 

Let's generate a sample from a Normal distribution with a mean of 0 and a standard deviation of 1, and plot the distribution.

```py

mu = 0     # Mean
sigma = 1  # Standard deviation
size = 1000  # Number of samples

# Generating Normal distribution samples
normal_samples = np.random.normal(mu, sigma, size)

# Plotting the distribution
plt.figure(figsize=(8, 5))
plt.hist(normal_samples, bins=30, density=True, color='blue', alpha=0.7)
plt.title('Normal Distribution (μ=0, σ=1)')
plt.xlabel('Value')
plt.ylabel('Density')
plt.show()

```
![](/project/statistical_distributions/normal_distribution.png)

In this plot:
- The distribution forms the classic bell-shaped curve that is symmetric around the mean.
- Most of the data points are concentrated around the mean, with fewer points as you move further away.
- This particular Normal distribution, where $\mu$ = 0 and $\sigma$ = 1, is known as the Standard Normal Distribution.

The Normal distribution is fundamental in statistics and is often used as a first approximation to describe real-world variables that tend to cluster around a single mean value.

#### Uniform Distribution
- **Math Representation**: \( f(x|a, b) = \frac{1}{b-a} \) for \( a \leq x \leq b \)
- **Generation Method**: Generated by scaling and shifting random numbers produced by a basic random number generator.

#### Exponential Distribution
- **Math Representation**: \( f(x|\lambda) = \lambda e^{-\lambda x} \) for \( x \geq 0 \)
- **Generation Method**: Generated using the inverse transform sampling method.

#### Beta Distribution
- **Math Representation**: \( f(x|\alpha, \beta) = \frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha, \beta)} \)
- **Generation Method**: Generated via methods like the acceptance-rejection technique.


### 3. Specialized Distributions

#### Student’s t-Distribution
- **Math Representation**: \( f(t) = \frac{\Gamma((\nu+1)/2)}{\sqrt{\nu\pi}\,\Gamma(\nu/2)}\left(1+\frac{t^2}{\nu}\right)^{-(\nu+1)/2} \)
- **Generation Method**: Derived as the distribution of the ratio of a standard normal variable and the square root of a scaled chi-squared variable.

#### Chi-Squared Distribution
- **Math Representation**: \( f(x|k) = \frac{1}{2^{k/2}\Gamma(k/2)}x^{k/2 - 1}e^{-x/2} \)
- **Generation Method**: Generated by summing the squares of k independent standard normal random variables.

#### F-Distribution
- **Math Representation**: \( f(x|d_1, d_2) = \frac{\sqrt{\frac{(d_1x)^{d_1} \cdot d_2^{d_2}}{(d_1x+d_2)^{d_1+d_2}}}}{x \cdot B\left(\frac{d_1}{2}, \frac{d_2}{2}\right)} \)
- **Generation Method**: Generated as the ratio of two scaled chi-squared distributed variables.

These distributions are foundational in statistics and are used based on the nature of the data (continuous, discrete) and the specific requirements of the analysis being conducted. Each distribution has unique properties and assumptions that make it suitable for different types of data and statistical inference needs.