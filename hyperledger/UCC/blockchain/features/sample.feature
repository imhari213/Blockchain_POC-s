#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

Feature: Sample

    Background:
        Given I have deployed the business network definition ..

    Scenario: Store hash of Generated PDF file
        When I store the hashed value
        And I submit the following transaction of type org.example.mynetwork.StoreHash
            | newFilling |
            | a41af76431ef5ad8af43bea955c874e44f2f722f9bec2c71a1b0eac3a44d3e90 |
        Then I should have the following assets of type org.example.mynetwork.NewFilling
            | hashId |
            | a41af76431ef5ad8af43bea955c874e44f2f722f9bec2c71a1b0eac3a44d3e90 |

    
