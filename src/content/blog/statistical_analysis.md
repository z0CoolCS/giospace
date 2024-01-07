---

title: 'Statistical Analysis'
description: 'Concepts to understand statistical analysis'
author: 'Giordano Alvitez'
tags: ["statistics"]
pubDate: 2024-01-07
heroImage: "/project/statistical_distributions/null_hypotheses.png"
url: "statistical_analysis"
type_content: "blog"
badge: "New"
draft: False
---

After looking at the data using graphis it is time to start testing some hypotheses **Null Hypotheses $H_0$**. Formulating the null hypothesis is a crucial step in statistical testing. The null hypothesis is a statement that indicates no effect or no difference, and it is what you aim to test against your alternative hypothesis. 

Here are steps to formulate the null hypothesis:  

1. **Understand Your Research Question**: The first step is to clearly understand what you are trying to investigate. What is the main question or relationship you are examining?

2. **Identify the Variables**: Determine the key variables in your study. For example, if you are looking at the effect of a training program on employee productivity, your main variables might be the training program (independent variable) and employee productivity (dependent variable).

3. **Specify the Expected Outcome**: Before formulating the null hypothesis, think about what outcome you expect or are testing for. The null hypothesis is often the opposite of this.

4. **State the Null Hypothesis as a No-Effect or No-Difference Position**: The null hypothesis typically states that there is no effect, no difference, or no association between the variables. For example:
    - If you're testing a new drug's effectiveness, your null hypothesis might be "The new drug has no effect on the disease."
    - If you're comparing two groups (e.g., control and experimental), the null hypothesis could be "There is no difference in outcomes between the control and experimental groups."
    - In a correlation study, it might be "There is no association between variable X and variable Y."

5. **Make it Specific, Testable, Clear, Simple**: The null hypothesis should be clear, specific, and testable. It should state a precise claim that can be tested with data. A good null hypothesis is both clear and simple, making it easy to understand and test.

6. **Use Appropriate Statistical Terms**: Depending on the type of test, the null hypothesis might involve specific statistical terms. For example, in a t-test, you might state, "There is no difference in the mean values of group A and group B."

7. **Prepare for the Alternative Hypothesis**: The null hypothesis is paired with an alternative hypothesis \(denoted as $H_a$ or $H_1$\), which is what you suspect might be true instead. The alternative hypothesis is usually the research hypothesis you are interested in.


Remember, the null hypothesis is a fundamental part of hypothesis testing in statistics, and it's crucial to get it right. The goal in statistical testing is often to gather evidence to reject the null hypothesis, thereby lending support to the alternative hypothesis.


Let's consider a business case related to a company's marketing efforts.

### Business Case:
**Scenario**: A company has implemented a new online marketing campaign. They want to know if this new campaign has led to an increase in the average daily sales compared to the previous campaign.

### Null Hypothesis Formulation:
- **Null Hypothesis (H0)**: The new marketing campaign has no effect on the average daily sales.
- **Alternative Hypothesis (H1)**: The new marketing campaign has increased the average daily sales.

In statistical terms, if $\mu_{old}$ represents the average daily sales under the old campaign and $\mu_{new}$ represents the average daily sales under the new campaign, our hypotheses can be stated as:

- H0: $\mu_{new} \leq \mu_{old}$
- H1: $\mu_{new} > \mu_{old}$

### Data Generation:
Let's generate some synthetic data to represent daily sales under both campaigns. We will assume that the daily sales follow a normal distribution. For demonstration purposes, let's generate data for 30 days for each campaign. Our descriptive values are:  

- Old Campaign: Mean daily sales = $1000, Standard Deviation = $200
- New Campaign: Mean daily sales = $1100, Standard Deviation = $200

We will then perform a t-test to determine if the increase in sales is statistically significant.

### Statistical Test Results:
- T-Statistic: -0.89
- P-Value: 0.81

### Python Code 

```py

import numpy as np
import scipy.stats as stats

# Parameters for the synthetic data
np.random.seed(0)  # for reproducibility
mean_old = 1000  # mean sales for the old campaign
std_dev = 200  # standard deviation for both campaigns
n = 30  # number of days

# Generate synthetic sales data
sales_old = np.random.normal(mean_old, std_dev, n)

# Assume the new campaign increases the mean sales by 10%
mean_new = 1.1 * mean_old
sales_new = np.random.normal(mean_new, std_dev, n)

# Perform a t-test (one-tailed)
t_stat, p_value = stats.ttest_ind(sales_new, sales_old, alternative='greater')

print(t_stat, p_value)

```

### Interpretation:
1. **T-Statistic**: The negative value suggests that the average sales during the new campaign are lower than during the old campaign, according to our sample data. However, this is just an indication and not conclusive.

2. **P-Value**: The p-value of 0.81 is much higher than the common significance level (alpha) of 0.05. A high p-value indicates weak evidence against the null hypothesis.

### Conclusion:
Given the high p-value, we do not have sufficient evidence to reject the null hypothesis. Therefore, based on our sample data, we conclude that there is no statistical evidence to suggest that the new marketing campaign has led to an increase in average daily sales.

### Note:
This is a hypothetical example with synthetic data. In a real-world scenario, actual sales data would be needed for a valid analysis. Furthermore, factors like seasonality, market trends, and external events should also be considered in a comprehensive analysis.